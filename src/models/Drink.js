const mongooose = require('mongoose');

const drinkSchema = new mongooose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

const drinks = mongoose.model('drinks', drinkSchema);
export default drinks;
