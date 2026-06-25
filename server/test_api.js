async function test() {
  try {
    const res = await fetch('http://localhost:3000/api/reglas-envio', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer test'
      },
      body: JSON.stringify({ pais: 'Mexico', estados: ['Jalisco'], precio: 150 })
    });
    const data = await res.json();
    console.log("Status:", res.status, "Data:", data);
  } catch (e) {
    console.error("API Error:", e);
  }
}
test();
