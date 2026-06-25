const { Pool } = require('pg');
const pool = new Pool({ connectionString: 'postgresql://neondb_owner:npg_FaMtgID6idQ3@ep-still-brook-atktulf4-pooler.c-9.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require' });
async function run() {
  try {
    const res = await pool.query("INSERT INTO reglas_envio (pais, estados, precio) VALUES ('Mexico', '[\"Jalisco\"]', 150) RETURNING *");
    console.log("Success:", res.rows);
    await pool.query("DELETE FROM reglas_envio WHERE id = $1", [res.rows[0].id]);
  } catch(e) {
    console.error("DB Error:", e);
  }
  process.exit();
}
run();
