import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const pizza2FlavorsSchema = new Schema({
    pizza1: {
        type: Schema.Types.ObjectId,
        ref: 'pizzas',
        required: true,
    },
    pizza2: {
        type: Schema.Types.ObjectId,
        ref: 'pizzas',
        required: true,
    },
    name: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    price: {
        type: Number,
        required: false,
    },
    image: {
        type: String,
        required: true,
    },
});

const pizza2Flavors = mongoose.model('pizza2Flavors', pizza2FlavorsSchema);
export default pizza2Flavors;