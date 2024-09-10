const mongoose = require('mongoose');
const Telefonos = require('./model/cellphon.model');

mongoose.connect('mongodb://127.0.0.1:27017/prueba1').then(() => {
    console.log('Conectado a la base de datos');
}).catch((error) => {
    console.log('Error al conectarse a la base de datos');
    console.log(error);
});

// CREAR UN REGISTRO EN MONGODB

// const nuevoTelefono = new Telefonos({
//     marca: 'Samsung',
//     modelo: 'Galaxy S21',
//     nombre: 'Samsung Galaxy S21 Ultra',
//     precio: 1199, // Precio en dólares
//     almacenamiento: 256, // Almacenamiento en GB
//     ram: 12, // RAM en GB
//     procesador: 'Exynos 2100',
//     pantalla: '6.8 pulgadas Dynamic AMOLED 2X'
// });nuevoTelefono.save();
// const nuevoTelefono2 = new Telefonos({
//     marca: 'Apple',
//     modelo: 'iPhone 13',
//     nombre: 'Apple iPhone 13 Pro',
//     precio: 999, // Precio en dólares
//     almacenamiento: 128, // Almacenamiento en GB
//     ram: 6, // RAM en GB
//     procesador: 'A15 Bionic',
//     pantalla: '6.1 pulgadas Super Retina XDR'
// });nuevoTelefono2.save();

// BUSCAR UN REGISTRO EN MONGODB

// Telefonos.findOne({nombre: 'Apple iPhone 13 Pro'}).then((respuesta) => {
//     console.log('Dato encontrado');
//     console.log(respuesta);
// }).catch((error) => {
//     console.log('Error al buscar el dato');
//     console.log(error);
// });

// ACTUALIZAR UN REGISTRO EN MONGODB

// Telefonos.updateOne({nombre: 'Apple iPhone 13 Pro'}, {precio: 1999}).then((respuesta) => {
//     console.log('Dato actualizado');
//     console.log(respuesta);
// }).catch((error) => {
//     console.log('Error al actualizar el dato');
//     console.log(error);
// });

// ELIMINAR UN REGISTRO EN MONGODB

// Telefonos.deleteOne({nombre: 'Apple iPhone 13 Pro'}).then((respuesta) => {
//     console.log('Dato eliminado');
//     console.log(respuesta);
// }).catch((error) => {
//     console.log('Error al eliminar el dato');
//     console.log(error);
// });