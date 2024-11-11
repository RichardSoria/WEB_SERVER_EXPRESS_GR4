import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import router from './routers/member_routes.js';

// Inicialización
const app = express();

// Obtener la ruta del directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());

// Servir archivos estáticos desde la carpeta 'img'
app.use('/img', express.static(path.join(__dirname, 'img'))); 

// Rutas
app.use('/integrantes', router);

app.use('/productos', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Productos - Grupo #4</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: lightblue;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    header, footer {
      background-color: #007bff;
      color: white;
      text-align: center;
      padding: 10px 0;
    }
    .container {
      padding: 20px;
      text-align: center;
    }
    footer {
      position: fixed;
      width: 100%;
      bottom: 0;
      font-weight: bold;
    }
    .product {
      margin-bottom: 20px;
    }
    .product h3 {
      margin: 0;
    }
    .product p {
      margin: 5px 0;
    }
    button {
      padding: 10px 20px;
      font-size: 16px;
      font-weight: bold;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <header>
    <h1>Productos del Grupo #4</h1>
  </header>
  <div class="container">
    <h2>Lista de Productos</h2>
    <div class="product">
      <h3>Producto 1: MacBook Pro</h3>
      <p>Descripción: Una laptop potente con procesador Apple M1 y 16GB de RAM.</p>
      <p>Precio: $2400</p>
    </div>
    <div class="product">
      <h3>Producto 2: Samsung Galaxy S21</h3>
      <p>Descripción: Un smartphone con pantalla AMOLED de 6.2 pulgadas y 128GB de almacenamiento.</p>
      <p>Precio: $999</p>
    </div>
    <div class="product">
      <h3>Producto 3: Sony WH-1000XM4</h3>
      <p>Descripción: Auriculares inalámbricos con cancelación de ruido activa.</p>
      <p>Precio: $350</p>
    </div>
    <div class="product">
      <h3>Producto 4: Dell UltraSharp 27</h3>
      <p>Descripción: Monitor 4K UHD de 27 pulgadas con HDR.</p>
      <p>Precio: $500</p>
    </div>
    <div class="product">
      <h3>Producto 5: Logitech G Pro X</h3>
      <p>Descripción: Teclado mecánico con retroiluminación RGB.</p>
      <p>Precio: $130</p>
    </div>
    <div class="product">
      <h3>Producto 6: Razer DeathAdder V2</h3>
      <p>Descripción: Ratón ergonómico con sensor óptico de alta precisión.</p>
      <p>Precio: $70</p>
    </div>
  </div>
  <div class="container">
    <div><button onclick="window.location.href='/'">Volver al Inicio</button></div>
  </div>
  <footer>
    <p>© 2024 Grupo #4. Todos los derechos reservados.</p>
  </footer>
</body>
</html>
  `);
});


// Ruta de inicio
app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Landing Page - Grupo #4</title>
  <style>
    h1 {
      color: white;
      text-align: center;
      margin-top: 20px;
    }
    body {
      font-family: Arial, sans-serif;
      background-color: lightblue;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    header, footer {
      background-color: #007bff;
      color: white;
      text-align: center;
      padding: 10px 0;
    }
    .container {
      display: grid;
      grid-template-columns: repeat(3, auto);
      gap: 10px;
      padding: 20px;
      justify-items: center;
      flex: 1;
    }
    button {
      padding: 10px 20px;
      font-size: 16px;
      font-weight: bold;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
    .gallery {
      display: grid;
      grid-template-columns: repeat(3, auto);
      grid-template-rows: repeat(2, auto);
      margin: 20px;
      gap: 30px;
      justify-items: center;
    }
    .gallery img {
      height: 275px;
      width: auto;
      padding: 10px;
      border: 3px solid;
      border-radius: 6px;
    }
    footer {
      position: fixed;
      width: 100%;
      bottom: 0;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <header>
    <h1>Bienvenidos a la Landing Page del Grupo #4</h1>
  </header>
  <div class="gallery">
    <img src="/img/img_1.jpg" alt="Ricahrd Soria">
    <img src="/img/img_2.jpg" alt="Isaac Valenzuela">
    <img src="/img/img_3.jpg" alt="Adrián Ramos">
    <img src="/img/img_4.jpg" alt="Josue Guerra">
    <img src="/img/img_5.jpg" alt="Carlos Pérez">
    <img src="/img/img_6.png" alt="Ithan Camacho">
  </div>
  <div class="container">
    <div><button onclick="window.location.href='/integrantes'">Integrantes</button></div>
    <div><button onclick="window.location.href='/integrantes/' + Math.floor(Math.random() * 6 + 1)">Integrante al azar</button></div>
    <div><button onclick="window.location.href='/productos'">Productos</button></div>
  </div>
  <footer>
    <p>© 2024 Grupo #4. Todos los derechos reservados.</p>
  </footer>
</body>
</html>
  `);
});

export default app;