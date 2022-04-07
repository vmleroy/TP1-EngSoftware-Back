import express from "express";
import PizzaController from "../controllers/pizzaController.js";

const router = express.Router();

router
    .get("/cardapio", PizzaController.getPizzas)
    .get("/cardapio/:id", PizzaController.getPizzasById)
    .post("/cardapio", PizzaController.createPizza)
    .put("/cardapio/:id", PizzaController.updatePizza)
    .delete("/cardapio/:id", PizzaController.deletePizza)


export default router
