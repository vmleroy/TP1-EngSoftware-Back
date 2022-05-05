import mongoose from "mongoose";
import Schema from "mongoose";

const orderSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: false,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    createDate: {
        type: Date,
        required: false,
    },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'delivered', 'canceled'],
        default: 'pending',
    },
    pizzas: [{
        type: Schema.Types.ObjectId,
        ref: 'pizzas',
        required: true,
    }],
    pizza2flavors: [{
        type: Schema.Types.ObjectId,
        ref: 'pizza2Flavors',
        required: true,
    }],
    drinks: [{
        type: Schema.Types.ObjectId,
        ref: 'drinks',
        required: true,
    }],
    promos: [{
        type: Schema.Types.ObjectId,
        ref: 'promos',
        required: true,
    }]

});

const orders = mongoose.model('orders', orderSchema);
export default orders;