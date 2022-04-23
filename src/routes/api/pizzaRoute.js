import express from "express";
import PizzaController from "../../controllers/pizzaController.js";

const router = express.Router();

router
    .get("/pizza", PizzaController.getPizzas)
    .get("/pizza/:id_pizza", PizzaController.getPizzasById)
    .post("/pizza", PizzaController.createPizza)
    .put("/pizza/:id_pizza", PizzaController.updatePizza)
    .delete("/pizza/:id_pizza", PizzaController.deletePizza)


export default router
