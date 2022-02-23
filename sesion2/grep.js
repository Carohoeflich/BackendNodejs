const fs = require('fs')
const path = require('path')

  fs.readFile(path.join(__dirname, '/input.txt'), {encoding: 'utf-8'}, function (error, data) {
    if (error) return console.error(error)

    var lineas = (data.match(/\n/g) || []).length + 1;
    var chars = (data.match(/./g) || []).length;
    var space = (data.match(/ /g) || []).length;

    console.log('numero de caracteres:', chars);
    console.log('numero de espacios:', space);
    console.log('numero de lineas:', lineas);

  })

