import express from "express";
import PizzaController from "../../controllers/pizzaController.js";

const router = express.Router();

router
    .get("/cardapio", PizzaController.getPizzas)
    .get("/cardapio/:id_pizza", PizzaController.getPizzasById)
    .post("/cardapio", PizzaController.createPizza)
    .put("/cardapio/:id_pizza", PizzaController.updatePizza)
    .delete("/cardapio/:id_pizza", PizzaController.deletePizza)


export default router
