const mongooose = require('mongoose');

const orderSchema = new mongooose.Schema({
    number: {
        type: Number,
        required: true,
    },
    user: {
        type: mongooose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createDate: {
        type: Date,
        required: true,
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
          required: true,
          default: 1,
        },
        price: {
          type: Number,
          required: true,
        },
        pizza: {
          type: mongooose.Schema.Types.ObjectId,
          ref: 'Pizza', 
          required: true,
        }
      },
      {
        quantity: {
          type: Number,
          required: true,
          default: 1,
        },
        price: {
          type: Number,
          required: true,
        },
        drink: {
          type: mongooose.Schema.Types.ObjectId,
          ref: 'Drink',
          required: true,
        }
      }],
});

const order = mongooose.model('orders', orderSchema);
export default order;