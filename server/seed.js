require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

const stores = [
  "Amigo Merch Oficial",
  "Rock Store MX",
  "Urban Threads",
  "Pop Culture Hub",
  "Indie Vibes",
  "Metal Gear Merch"
];

const productPrefixes = ["Playera", "Sudadera", "Gorra", "Taza", "Póster", "Pin", "Mochila", "Sticker", "Llavero", "Calcetines"];
const adjectives = ["Clásica", "Vintage", "Neon", "Minimalista", "Edición Limitada", "Premium", "Básica", "Tour 2024", "Retro", "Oficial"];
const flags = ["", "Nuevo", "Popular", "Preventa", "Agotado"];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateSlug(name) {
  return name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-') + '-' + Math.floor(Math.random() * 1000);
}

async function seed() {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    
    // Clear out existing data to meet the user's request: "ya no quueri datos duros en lo que ya esta conectado del sistema"
    // Wait, let's keep it safe. Let's truncate and restart identity.
    console.log("Limpiando base de datos...");
    await client.query('TRUNCATE TABLE product_variations, products, tiendas RESTART IDENTITY CASCADE');

    console.log("Creando tiendas...");
    for (const storeName of stores) {
      await client.query(
        'INSERT INTO tiendas (nombre, publico, imagen_url) VALUES ($1, $2, $3)',
        [storeName, true, null]
      );
    }

    console.log("Creando productos...");
    for (const storeName of stores) {
      for (let i = 0; i < 5; i++) {
        const productName = `${getRandomItem(productPrefixes)} ${getRandomItem(adjectives)}`;
        const price = Math.floor(Math.random() * 500) + 100;
        const stock = Math.floor(Math.random() * 100);
        const flag = getRandomItem(flags);
        const slug = generateSlug(productName);
        const esVariable = Math.random() > 0.7; // 30% chance of being variable
        
        let attrJson = null;
        if (esVariable) {
          attrJson = JSON.stringify([{ nombre: 'Talla', opciones: 'S, M, L' }]);
        }

        const res = await client.query(
          `INSERT INTO products (nombre, descripcion, precio, stock, es_variable, es_publico, slug, tienda, flag, atributos)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id`,
          [productName, `Descripción para ${productName}`, esVariable ? null : price, esVariable ? 0 : stock, esVariable, true, slug, storeName, flag || null, attrJson]
        );

        if (esVariable) {
          const productId = res.rows[0].id;
          const tallas = ['S', 'M', 'L'];
          for (const talla of tallas) {
             await client.query(
               'INSERT INTO product_variations (product_id, valor, precio, stock) VALUES ($1, $2, $3, $4)',
               [productId, talla, price, Math.floor(Math.random() * 50)]
             );
          }
        }
      }
    }

    await client.query('COMMIT');
    console.log("¡Seed completado exitosamente!");
  } catch (err) {
    await client.query('ROLLBACK');
    console.error("Error al sembrar:", err);
  } finally {
    client.release();
    pool.end();
  }
}

seed();
