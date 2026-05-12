const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, '..', 'public')));

// Rutas personalizadas (las mismas que ya tenías)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'inicio.html'));
});

app.get('/transito', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'transito.html'));
});

app.get('/soat', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'soat.html'));
});

app.get('/dian', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'dian.html'));
});

// Exportamos la app para que Vercel la convierta en función serverless
module.exports = app;