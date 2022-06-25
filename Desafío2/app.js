const fs = require('fs');

class Contenedor {
  constructor(archivoApp) {
    this.archivoApp = archivoApp;
  }

  getAll = async () => {
    try {
      const contenido = await fs.promises.readFile(this.archivoApp, 'utf-8');
      return JSON.parse(contenido);
    } catch (error) {
      console.error(error);
      await fs.promises.writeFile(this.archivoApp, JSON.stringify([], null, 2));
      const contenido = await fs.promises.readFile(this.archivoApp, 'utf-8');
      return JSON.parse(contenido);
    }
  }

  save = async (objeto) => {
    try {
      const arrObjetos = await this.getAll();
      arrObjetos.push({ ...objeto, id: arrObjetos.length + 1 });
      await fs.promises.writeFile(this.archivoApp, JSON.stringify(arrObjetos, null, 2));
      return objeto.identificación;
    } catch (error) {
      console.error(error);
      throw new Error('No se pudo guardar');
    }
  }

  getById = async (id) => {
    try {
      const arrObjetos = await this.getAll();
      return arrObjetos.find(obj => (obj.id === id)) || null;
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener el objeto por Id');
    }
  }

  deleteById = async (id) => {
    try {
      const arrObjetos = await this.getAll();
      for (let i = 0; i < arrObjetos.length; i++) {
        if (id === arrObjetos[i].id) {
          arrObjetos.splice(i, 1);
        }
      }
      await fs.promises.writeFile(this.archivoApp, JSON.stringify(arrObjetos, null, 2))
    } catch (error) {
      console.error(error);
      throw new Error('Error al borrar el objeto por Id');
    }
  }

  deleteAll = async () => {
    try {
      await fs.promises.writeFile(this.archivoApp, JSON.stringify([], null, 2))
    } catch (error) {
      console.error(error);
      throw new Error('Error al borrar todos los objetos');
    }
  }
}

module.exports = Contenedor;