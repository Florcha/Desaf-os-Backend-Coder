const productos = [];

const productoController = {

  getAll(_req, _res) {
    _res.send(productos);
  },

  getById(_req, _res) {
    const id = parseInt(_req.params.id);
    const producto = productos.find(p => p.id === id);
    _res.send(producto ? producto : { error: 'Producto no encontrado' });
  },

  save(_req, _res) {
    const producto = _req.body;
    producto.id = productos.length + 1;
    productos.push(producto);
    _res.send(producto);
  },

  update(_req, _res) {
    const id = parseInt(_req.params.id);
    const producto = _req.body;
    const productoIndex = productos.findIndex(p => p.id === id);
    if (productoIndex === -1) {
      _res.send({ error: 'Producto no encontrado' });
    } else {
      productos[productoIndex] = { ...producto, id: id };
      _res.send(producto);
    }
  },

  deleteById(_req, _res) {
    const id = parseInt(_req.params.id);
    const productoIndex = productos.findIndex(p => p.id === id);
    if (productoIndex === -1) {
      _res.send({ error: 'Producto no encontrado' });
    } else {
      productos.splice(productoIndex, 1);
      _res.send({ message: 'Producto eliminado' });
    }
  },

};

export default productoController;