const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    product: {
        type: String,
        required: [true, 'El nombre del producto es requerido']
    },
    sellIn: {
        type: Number,
        required: [true, 'El tiempo de venta es requerido']
    },
    price: {
        type: Number,
        required: [true, 'El precio del prodcuto es requerido']
    },
    createdAt: {
        type: Date,
        dafault: Date.now()
    },
    updatedAt: {
        type: Date
    }
}, {_id :  false });

module.exports = mongoose.model('Product',ProductSchema);