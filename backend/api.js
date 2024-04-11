// api.js
const express = require('express');
const app = express();
const Certificate = require('./server'); // Importar el modelo de certificado

app.use(express.json());

// Endpoint para subir un certificado
app.post('/api/certificates', async (req, res) => {
  const { userId, name, description, file } = req.body;
  const certificate = new Certificate({ userId, name, description, file });
  await certificate.save();
  res.json(certificate);
});

// Endpoint para obtener los certificados de un usuario
app.get('/api/certificates', async (req, res) => {
  const { userId } = req.query;
  const certificates = await Certificate.find({ userId });
  res.json(certificates);
});

app.listen(3000, () => console.log('API listening on port 3000'));

