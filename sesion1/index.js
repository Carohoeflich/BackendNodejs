var moment = require("moment");
var now = moment();
console.log(`Hoy es ${now}`);

var sumar = require('./modulo')
sumar(2,2)

var os = require('os');
var misCpu= os.cpus();
console.log(misCpu);

var colors = require('colors');

console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red); // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow