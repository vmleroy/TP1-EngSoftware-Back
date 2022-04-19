import express from "express";
import DrinkController from "../../controllers/drinkController.js";

const router = express.Router();

router 
    .get("/bebida", DrinkController.getDrinks)
    .get("/bebida/:id", DrinkController.getDrinkById)
    .post("/bebida", DrinkController.createDrink)
    .put("/bebida/:id", DrinkController.updateDrink)
    .delete("/bebida/:id", DrinkController.deleteDrink);
        
export default router;