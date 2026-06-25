const jwt = require('jsonwebtoken');
const token = jwt.sign({ id: 1, username: 'admin', email: 'admin@admin.com', rol: 'admin' }, 'fallback-secret', { expiresIn: '8h' });

async function run() {
  try {
    const res = await fetch('http://127.0.0.1:3000/api/reglas-envio', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify({ pais: 'Mexico', estados: ['Jalisco'], precio: 150 })
    });
    const data = await res.json();
    console.log("Status:", res.status, "Data:", data);
  } catch(e) {
    console.error(e);
  }
}
run();
