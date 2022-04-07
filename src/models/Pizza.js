import mongoose from "mongoose";

const pizzaSchema = new mongoose.Schema(
    {
        id: {type: String},
        sabor: {type: String, required: true},
        descricao: {type: String, required: true},
        valor: {type: Number, required: true}
    }
);

const pizzas = mongoose.model('pizzas', pizzaSchema);

export default pizzas;