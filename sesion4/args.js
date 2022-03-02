const process = require('process');

const operacion = process.argv[2]; // process.argv recupera informacion cuando se llama por consola

const num1 = process.argv[3];
const num2 = process.argv[4];


switch(operacion){
    case 'suma':
        console.log(`${num1} + ${num2} = ${parseInt(num1) + parseInt(num2)}`)
        break;
    case 'resta':
        console.log(`${num1} - ${num2} = ${num1 - num2}`)
        break;
    case 'multiplica':
        console.log(`${num1} * ${num2} = ${num1 * num2}`)
        break;
    case 'divide':
        console.log(`${num1} / ${num2} = ${num1 / num2}`)
        break;
    default:
        console.log(operacion)
        break;
}