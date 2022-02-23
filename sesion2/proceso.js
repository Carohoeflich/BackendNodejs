const process = require('process');
console.log('Id del proceso: ', process.pid);
console.log('Argumentos: ', process.argv); //creando arrays cuando en la consola ponemos 'node proceso.js argumeto1 argumento2 etc'
// console.log('Variables de entorno: ', process.env);

process.stdin.setRawMode(true); //pausa el proceso hasta que usemos una tecla del teclado
process.stdin.resume(); //continua con el proceso
process.stdin.on('data', process.exit.bind(process, 0)); //quitar el proceso

// process.exit(1); // fallo del proceso generico
// process.exit(129) // fallo del proceso especifico
// process.exit(0) // proceso de exito