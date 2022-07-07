//Importa el paquete express
import bodyParser from 'body-parser';
import express from 'express';
import routes from './routes.js';

//Invocar a la funcion express
var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Almacena el puerto en el que va a correr
const port = 8080;

app.use('/', routes);

// //Cuando llegue una request a localhost:8080
// app.get('/', (_req, res) => {
//     res.send('Entra solo a la URL!')
// });

//Correr la app express, en localhost en el puerto 8080
app.listen(port, () => {
  console.log('server runing on port', 8080);
});
