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
    items: [{
      quantity: {
        type: Number,
        required: false,
        default: 1,
      },
      pizza: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'pizzas', 
        required: false,
      }
    },
    {
      quantity: {
        type: Number,
        required: false,
        default: 1,
      },
      drink: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'drinks',
        required: false,
      }
    }],
});

const order = mongoose.model('orders', orderSchema);
export default order;