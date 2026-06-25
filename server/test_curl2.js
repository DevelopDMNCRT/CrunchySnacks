const jwt = require('jsonwebtoken');
const token = jwt.sign({ id: 1, username: 'admin', email: 'admin@admin.com', rol: 'admin' }, 'fallback-secret', { expiresIn: '8h' });
const execSync = require('child_process').execSync;
try {
  const output = execSync(`curl -i -X POST -H "Content-Type: application/json" -H "Authorization: Bearer ${token}" -d '{"pais":"Mexico", "estados":["Jalisco"], "precio":150}' http://127.0.0.1:3001/api/reglas-envio`);
  console.log(output.toString());
} catch(e) {
  console.error("CURL Error");
}
