const mongoose = require('mongoose');
const esquemaTelefonos = new mongoose.Schema({
    marca: String,
    modelo: String,
    nombre: String,
    precio: Number,
    almacenamiento: Number,
    ram: Number,
    procesador: String,
    pantalla: String
});
module.exports = mongoose.model('Cellphone', esquemaTelefonos);