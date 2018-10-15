var mongoose = require('mongoose');

var OfferSchema = new mongoose.Schema({
  empresa: String,
  localizacion: String,
  latitud: String,
  longitud: String,
  sueldo: String,
  tipo: String,
  descripcion: String,
  image: String,
  requisitos: String,
  plazasDisponibles: String
}, {collection:'offer'}, {timestamps: true});

mongoose.model('Offer', OfferSchema);
