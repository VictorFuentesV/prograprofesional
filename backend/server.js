// server.js
const mongoose = require('mongoose');

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/certificados', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Definición del esquema y modelo de certificado
const certificateSchema = new mongoose.Schema({
  userId: String,
  name: String,
  description: String,
  file: Buffer,
  // Otros campos del certificado
});

const Certificate = mongoose.model('Certificate', certificateSchema);

module.exports = Certificate;