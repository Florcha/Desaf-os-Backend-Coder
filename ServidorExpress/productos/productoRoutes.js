import express from 'express';
import productoController from './productoController.js';

const productoRoutes = express.Router();

productoRoutes.route('/')
  .get(productoController.getAll)
  .post(productoController.save);

productoRoutes.route('/:id')
  .get(productoController.getById)
  .put(productoController.update)
  .delete(productoController.deleteById);

export default productoRoutes;