class Usuario {

    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
  
    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }
  
    addMascota(nombre) {
        this.mascotas.push(nombre);
    }
  
    countMascotas() {
        return this.mascotas.length;
    }
  
    addBook(nombre, autor) {
        this.libros.push({
        nombre: nombre,
        autor: autor
        });
    }
  
    getBookNames() {
        return this.libros.map(libro => libro.nombre);
    }
  
}
  
let usuario = new Usuario('Juan', 'Perez', [], []);
  
const nombre = usuario.getFullName();
console.log(nombre);
  
usuario.addMascota('Firulais');
const contarMascotas = usuario.countMascotas();
console.log(contarMascotas);
  
usuario.addBook('El señor de los anillos', 'J.R.R. Tolkien');
const nombresLibros = usuario.getBookNames();
console.log(nombresLibros);