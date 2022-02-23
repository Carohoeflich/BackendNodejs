var nombre = 'Carolina \n';
const process = require('process');

var suma = parseInt(process.argv[2]) + parseInt(process.argv[3]);
if (suma = NaN){
    console('Error');
}
else{
console.log('Programado por: ', nombre, process.argv[2], '+', process.argv[3], '=', suma)
}

process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit(process, 0));