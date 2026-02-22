const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Sirve los archivos estáticos desde la carpeta raíz del proyecto
app.use(express.static(path.join(__dirname, '/')));

// Para cualquier otra petición, devuelve el index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});