require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });

async function run() {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    
    // Add peso to products and product_variations
    await client.query('ALTER TABLE products ADD COLUMN IF NOT EXISTS peso DECIMAL(10, 3) DEFAULT 0;');
    await client.query('ALTER TABLE product_variations ADD COLUMN IF NOT EXISTS peso DECIMAL(10, 3) DEFAULT 0;');
    
    // Add tracking columns to pedidos
    await client.query('ALTER TABLE pedidos ADD COLUMN IF NOT EXISTS tracking_number VARCHAR(255);');
    await client.query('ALTER TABLE pedidos ADD COLUMN IF NOT EXISTS guia_url TEXT;');
    
    // Create configuracion table
    await client.query(`
      CREATE TABLE IF NOT EXISTS configuracion (
        id SERIAL PRIMARY KEY,
        precio_envio DECIMAL(10, 2) DEFAULT 150.00,
        envia_token TEXT,
        envia_modo VARCHAR(50) DEFAULT 'sandbox',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    
    // Insert initial configuracion if not exists
    const configCheck = await client.query('SELECT count(*) FROM configuracion');
    if (parseInt(configCheck.rows[0].count) === 0) {
      await client.query("INSERT INTO configuracion (precio_envio, envia_modo) VALUES (150.00, 'sandbox')");
    }
    
    // Create reglas_envio table
    await client.query(`
      CREATE TABLE IF NOT EXISTS reglas_envio (
        id SERIAL PRIMARY KEY,
        pais VARCHAR(100) NOT NULL,
        estados TEXT,
        precio DECIMAL(10, 2) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    
    await client.query('COMMIT');
    console.log('Database updated successfully');
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Migration failed', err);
  } finally {
    client.release();
    pool.end();
  }
}
run();
