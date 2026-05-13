const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('inicio', {
    titulo: 'Inicio',
    paginaActual: 'inicio',
    mensaje: 'Bienvenido a nuestro sitio de trámites en línea. Aquí puedes realizar tus trámites de tránsito, comprar tu SOAT y gestionar tus trámites con la DIAN de manera fácil y rápida.'
  });
});


app.get('/transito', (req, res) => {
  res.render('transito', { 
    titulo: 'Trámites de Tránsito',
    paginaActual: 'transito'
 });
});

app.get('/soat', (req, res) => {
  res.render('soat', { 
    titulo: 'Punto de Venta SOAT',
    paginaActual: 'soat'
   });
});

app.get('/dian', (req, res) => {
  res.render('dian', { 
    titulo: 'Trámites DIAN',
    paginaActual: 'dian'
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor listo en http://localhost:${port}`);
});