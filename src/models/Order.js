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
    drinks: [{
        type: Schema.Types.ObjectId,
        ref: 'drinks',
        required: true,
    }],
});

const order = mongoose.model('orders', orderSchema);
export default order;