const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const orderItemSchema = Schema({

    name: {
        type: String,
        minlength: [5, 'Panjang nama makanan minimal 50 karakter'],
        required: [true, 'name must be filled']
    },

    price: {
        type: Number,
        required: [true, 'Harga item harus diisi']
    },

    qty: {
        type: Number,
        required: [true, 'Harga item harus diisi']
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    order_items: [{ type: Schema.Types.ObjectId, ref: 'OrderItem' }]

}, {timestamps: true})

module.exports = model('OrderItem', orderItemSchema);