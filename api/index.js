const express = require('express');
const path = require('path');
const app = express();

// Configurar EJS (ruta relativa desde api/ hacia views/)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));

// Servir archivos estáticos (CSS, imágenes) desde public/
app.use(express.static(path.join(__dirname, '..', 'public')));

// Rutas con res.render
app.get('/', (req, res) => {
  res.render('inicio', { titulo: 'Inicio', paginaAcutual: 'inicio' });
});

app.get('/transito', (req, res) => {
  res.render('transito', { titulo: 'Trámites de Tránsito', paginaActual: 'transito' });
});

app.get('/soat', (req, res) => {
  res.render('soat', { titulo: 'Punto de Venta SOAT', paginaActual: 'soat' });
});

app.get('/dian', (req, res) => {
  res.render('dian', { titulo: 'Trámites DIAN', paginaActual: 'dian'  });
});

module.exports = app;