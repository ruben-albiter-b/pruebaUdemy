const fs = require('fs');

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        let datos = '';

        if (!Number(base)) {
            reject(`El valor ${base} no es un número`);
            return;
        }

        for (let i = 1; i <= 10; i++) {
            datos += `${base}*${i}=${base*i}\n`;
        }
        fs.writeFile(`multiplicar/tablas/tabla-${base}.txt`, datos, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}


module.exports = {
    crearArchivo: crearArchivo
}