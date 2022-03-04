const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 4001;
app.listen(PORT, () => { //activar el servidor con listen
    console.log(`Server is listening on port ${PORT}`);
});

// const gods = [
//     {name: 'Zeus'},
//     {name: 'Hades'},
//     {name: 'Hermes'}
// ];

const gods ={
    Hades : { lives: 'The Underworld', symbol: 'Cornucopia', Partner: 'Persephone'},
    Zeus : { lives: 'Olympus', symbol: 'Thunderbolt', Partner: 'Hera'}
};

const constelaciones = {
       Andromeda : {
        abreviatura : 'And',
        superficie :  722.3,
        num_estrellas : 152,
        estr_mas_brillante : 'Alpheratz'
    },
       Orion: {
        abreviatura: 'Ori',
        superficie: 594.1,
        num_estrellas : 204,
        estr_mas_brillante : 'Rigel'
    }
}

app.get('/', (req, res, next) =>{ // url base
    res.send('hola mundo');
});

app.get('/gods', (req, res, next) => {  //url con subdominio gods
    res.send(gods);
});

app.get('/constelaciones', (req, res, next) => {
    res.send(constelaciones);
});

// route parameters
app.get('/gods/:name', (req, res, next) => {
    res.send(gods[req.params.name]);  //requesting el parametro que le dijimos, como name
});

//Query string
// console.log(req.query)
// console.log(req.body)

app.get('/constelaciones/:name', (req, res, next) => {
    let objeto = constelaciones[req.params.name];
    res.send(objeto);
});

app.get('/constelaciones/:abreviatura', (req, res, next) => {
   let abrev = constelaciones[req.params.abreviatura];
    res.send(abrev);
});

//metodo PUT --modifica
app.put('gods/:name', (req,res, next) => {
    const god = req.body; //recuperar informacion que esta en body
    gods[req.params.name] = god;
    res.send(gods);
});

//metodo POST --crear nueva instancia de la identidad
app.post('/gods', (req, res) => {
    const name = req.query.name  //creando nuevo dios con query string
    const newGod = req.body;
    gods[name] = newGod; //definiendo el nuevo dios
    res.status(200).send(gods); //.send casi no se usa en el metodo PUT o el POST.
  });

  //metodo DELETE
  app.delete('/gods/:name', (req, res) =>{
    const name = req.params.name;
    if (delete gods[name]){
      res.send(gods)
    } else {
      res.status(500)
    }
  })