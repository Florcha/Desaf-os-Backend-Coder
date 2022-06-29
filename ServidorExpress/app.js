//Importa el paquete express
const express = require("express");
const path = require("path");
const Contenedor = require('../Desafío2/app.js');

//Invocar a la funcion express
const app = express();

//Almacena el puerto en el que va a correr
const port = 8080

//Cuando llegue una request a localhost:8080
app.get("/", (req, res) => {
    res.send("Entra solo a la URL!")
});

//Cuando alguien quiere entrar a localhost:8080/productos
app.get('/productos', async (req, res) => {
    let Contenedor = new
Contenedor('../Desafío2/productos.txt');
    const productos = await contenedor .getAll();
    res.send({ productos })
});

//Cuando alguien quiere entrar a localhost:8080/productoRandom
app.get('/productoRandom', async (req, res) => {
    let contenedor = new
Contenedor('../Desafío/productos,txt');
    const productos = await contenedor.getAll();
    var producto = productos[Math.floor(Math.random() * productos.length)];
    res.send({ producto })
});

//Correr la app express, en localhost en el puerto 8080
app.listen(port, () => {
    console.log("server runing on port", 8080);
});
