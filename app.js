const fs = require('fs');

let base = 7;
let datos = '';

for (let i = 1; i <= 10; i++) {
    datos += `${base}*${i}=${base*i}\n`;
}

fs.writeFile(`tablas/tabla-${base}.txt`, datos, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base} ha sido creado!`);
});