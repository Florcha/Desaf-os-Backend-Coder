//Importa el paquete express
const express = require("express");
const path = require("path");

//Invocar a la funcion express
const app = express();

//Almacena el puerto en el que va a correr
const port = 3000

//Cuando llegue una request a localhost:3000 
app.get(
    "/", 
    (req, res) => {
    res.send("Entra solo a la URL!")
}
)

const Productos = [{
    id: "1",
    título: 'Crema Nutritiva con Liposomas',
    precio: 1200, 
    thumbnail: 'https://ceyc.com.ar/wp-content/uploads/EXEL_862-Gel-Cream-con-Ceramidas-50-ml.jpg'
}
    , {
    id: "2",
    título: 'Gel Cream con Ceramidas', 
    precio: 1500, 
    thumbnail: 'https://ceyc.com.ar/wp-content/uploads/EXEL_862-Gel-Cream-con-Ceramidas-50-ml.jpg'
}
    , {
    id: "3",
    título: 'Shampoo Exel Argan y Maracuya', 
    precio: 1100, 
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_884455-MLA31692481145_082019-O.jpg'
}
]

//Cuando alguien quiere entrar a localhost:3000/productos/1
app.get('/productos/1', (req, res) => {
    const crema = getProductosById(1)
    res.send(crema)
}
)

//Cuando alguien quiere entrar a localhost:3000/productos/2
app.get('/productos/2', (req, res) => {
    const gel = getProductosById(2)
    res.send(gel)
}
)

//Cuando alguien quiere entrar a localhost:3000/productos/3
app.get('/productos/3', (req, res) => {
    const shampoo = getProductosById(3)
    res.send(shampoo)
}
)

//Cuando alguien quiere entrar a localhost:3000/productos/id
app.get('/productos/:id/tipo/:type', (req, res) => {
    console.log(req.params)
    const productos = getProductosById(req.params.id)
    res.send(productos);
}
)

app.get('/pokemon', ( req, res) => {
    res.send(productos)
}
)

//Correr la app express, en localhost en el puerto 3000
app.listen(port, () => {
    console.log("server runing on port", 3000);
});

function getProductosById(id) {
    return Productos.find(productos => productos.id == id);
}