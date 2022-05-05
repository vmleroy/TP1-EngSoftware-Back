import mongoose from 'mongoose';

const promoSchema = new mongoose.Schema({
  name: {
      type: String,
      required: false,
  },
  pizzas: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'pizzas',
    required: false,
  }],
  pizzas2flavors: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'pizza2Flavors',
    required: false,
  }],
  drinks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'drinks',
    required: false,
  }],
  originalPrice: {
    type: Number,
    required: false,
  },
  promoPrice: {
    type: Number,
    required: false,
  },
  discount: {
    type: Number,
    required: true,
  }
})

const promos = mongoose.model('promos', promoSchema);
export default promos;