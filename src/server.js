import express from 'express';
import router from './routers/member_routes.js';

// Inicialización
const app = express();

// Middleware
app.use(express.json());

// Rutas de tu aplicación
app.use('/integrantes', router);

// Ruta de inicio
app.get('/', (req, res) => {
  res.send('<h1>Landing page - Grupo #4</h1>');
});

export default app;