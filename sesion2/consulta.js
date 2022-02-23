// var http = require("http");

// var server = http.createServer( //levantar un servidor
//     function(request,response){
//         response.end('<h1>Hola Mundo!</h1>') //termina la funcion mosntrando esto en el servidor
// });

// server.listen(3000, function(){ // 'prender' el servidor en el localhost
//     console.log("Servidor escuchando en el puerto " + this.address().port);
// })

//--------------------------------------------

const https = require('https');
function getAPOD() {
https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
  let data = '';

  resp.setEncoding('utf8'); //en que codificacion esperamos la respuesta
  //trozos de información recibida
  resp.on('data', (chunk) => {
    data += chunk; //concatenar esa informacion a la var data que estaba vacia
  });

  // La respuesta completa ha sido recibida. Imprime el resultado
  resp.on('end', () => {
    let body = JSON.parse(data); //aqui se encuenta toda esa inf
    console.log(' Título:',body.explanation);
    console.log('\n Explicación', body.explanation);
    console.log('\n URL:', body.url);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
}
getAPOD();
