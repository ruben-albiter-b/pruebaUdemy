const { crearArchivo } = require('./multiplicar/multiplicar');

//let base = '5';

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];
//console.log(base);
crearArchivo(base)
    .then(archivo => { console.log(`Archivo creado:${archivo}`) })
    .catch(err => console.log(err));