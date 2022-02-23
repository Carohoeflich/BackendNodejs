const https = require('https');
function getStarwars() {
https.get('https://swapi.dev/api/people', (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk; //concatenar esa informacion a la var data que estaba vacia
 });

  // La respuesta completa ha sido recibida. Imprime el resultado
  resp.on('end', () => {
    let body = JSON.parse(data); //aqui se encuenta toda esa inf
    console.log(body.results);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
}
getStarwars();
