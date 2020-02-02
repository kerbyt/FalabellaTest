const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SoldProductSchema = new Schema({
    productId: {
        type: String,
        required: [true, 'El nombre del producto es requerido']
    },
    product: {
        type: String,
        required: [true, 'El tiempo de venta es requerido']
    },
    createdAt: {
        type: Date,
        dafault: Date.now()
    },
    updatedAt: {
        type: Date
    }
}, {_id :  false });

module.exports = mongoose.model('SoldProduct',SoldProductSchema);