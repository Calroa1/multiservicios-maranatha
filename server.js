const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use (express.static(path.join(__dirname, 'public')));   


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'inicio.html'));
});

app.get('/transito', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'transito.html'));
});

app.get('/soat', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'soat.html'));
});

app.get('/dian', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dian.html'));
});
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor listo en puerto ${port}`);
});
