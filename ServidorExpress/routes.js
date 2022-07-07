import express from 'express';
import productoRoutes from './producto/productoRoutes.js';

const routes = express.Router();

routes.use('/productos', productoRoutes);

export default routes;