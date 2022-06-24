//CONSIGNA: Implementar programa que contenga una clase llamada Contenedor que reciba el nombre del archivo con el que va 
//a trabajar e implemente los siguientes métodos:

//save(Objet): Numer – Recibe un objeto, lo guarda en el archivo, devuelve el id asignado
//getById(Number): Object – Recibe un id y devuelve el objeto con ese id, o null si no está
//getAll(): Object [] – Devuelve un array con los objetos presentes en el archivo
//deleteById(Number): void – Elimina el archivo el objeto con el id buscado
//deleteAll(): void – Elimina todos los objetos presentes en el archivo


const Contenedor = require('./app.js')

let contenedor = new Contenedor('productos.txt');

const carrito = async () => {
  console.log('------leer el archivo por si tenemos productos de antes')
  console.log(await contenedor.getAll());

  console.log('------agregar productos')

  const obj1 = { título: 'Crema Nutritiva con Liposomas', precio: 1200, thumbnail: 'https://ceyc.com.ar/wp-content/uploads/EXEL_862-Gel-Cream-con-Ceramidas-50-ml.jpg' }
  console.log(await contenedor.save(obj1));
  const obj2 = { título: 'Gel Cream con Ceramidas', precio: 1500, thumbnail: 'https://ceyc.com.ar/wp-content/uploads/EXEL_862-Gel-Cream-con-Ceramidas-50-ml.jpg' }
  console.log(await contenedor.save(obj2));
  const obj3 = { título: 'Shampoo Exel Argan y Maracuya', precio: 1100, thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_884455-MLA31692481145_082019-O.jpg' }

  console.log(await contenedor.save(obj3));
  console.log('---------')
  console.log('----Contenedor despues')
  console.log(await contenedor.getAll());

  console.log('---------')
  console.log('--getById(2)')
  console.log(await contenedor.getById(2))
  console.log('--getById(34) : debe devolver null')
  console.log(await contenedor.getById(34))

  console.log('---------')
  console.log('----Contenedor Antes')
  console.log(await contenedor.getAll());
  console.log('------')
  console.log('--deleteById(2)')
  console.log(await contenedor.deleteById(2))
  console.log('----Contenedor despues')
  console.log(await contenedor.getAll())

  console.log('---------')
  console.log('--deleteAll')
  console.log(await contenedor.deleteAll())
  console.log('---------')
  console.log('--getAll')
  console.log(await contenedor.getAll())
}

carrito();