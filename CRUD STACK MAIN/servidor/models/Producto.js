const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    cantidad: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Producto', ProductoSchema);
