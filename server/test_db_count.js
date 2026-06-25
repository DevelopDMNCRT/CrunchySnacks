const { Pool } = require('pg');
const pool = new Pool({ connectionString: 'postgresql://neondb_owner:npg_FaMtgID6idQ3@ep-still-brook-atktulf4-pooler.c-9.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require' });
async function run() {
  try {
    const res = await pool.query("SELECT COUNT(*) FROM reglas_envio");
    console.log("Total Rows:", res.rows[0].count);
    const res2 = await pool.query("SELECT * FROM reglas_envio ORDER BY created_at DESC LIMIT 5");
    console.log("Recent DB Rows:", res2.rows);
  } catch(e) {
    console.error("DB Error:", e);
  }
  process.exit();
}
run();
