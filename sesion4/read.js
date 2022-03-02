const process =require('process');

// process.stdin  -- entrada estandar
// process.stdout  -- salida estandar

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
}) //Se crea la interfaz en el mismo momento cuando importas el modulo

readline.question('¿Quién eres?', name => {
    console.log(`Hola ${name}!`);
readline.question('¿Cual es tu num favorito?', num => {
        console.log(`Tu num fav es ${num}!`)
        readline.close();
    })
    // readline.close(); //cerrar el readline
  });