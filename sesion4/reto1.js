const process = require('process');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question('¿Que operacion quieres hacer?'), operacion => {
    switch (operacion) {
        case 'suma':
            readline.question('Primer Numero ', (num1) => {
                readline.question('Segundo numero', (num2) => {
                    console.log(`${num1} + ${num2} = ${parseInt(num1) + parseInt(num2)}`)
                    readline.close();
                })
            });
            break;
        case 'resta':
            readline.question('Primer Numero ', (num1) => {
                readline.question('Segundo numero', (num2) => {
                    console.log(`${num1} - ${num2} = ${num1 - num2}`)
                    readline.close();
                })
            });
            break;
        case 'multiplica':
            readline.question('Primer Numero ', (num1) => {
                readline.question('Segundo numero', (num2) => {
                    console.log(`${num1} * ${num2} = ${num1 * num2}`)
                    readline.close();
                })
            });
            break;
        case 'divide':
            readline.question('Primer Numero ', (num1) => {
                readline.question('Segundo numero', (num2) => {
                    console.log(`${num1} / ${num2} = ${num1 / num2}`)
                    readline.close();
                })
            });
            break;
            default:
            console.log(operacion)
            break;
    }
};