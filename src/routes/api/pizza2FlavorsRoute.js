import express from "express";
import Pizza2Flavors from '../../controllers/pizza2FlavorsController.js';

const router = express.Router();

router
    .get("/pizza2flavors", Pizza2Flavors.getPizza2Flavors)
    .get("/pizza2flavors/:id", Pizza2Flavors.getPizza2FlavorsById)
    .post("/pizza2flavors", Pizza2Flavors.createPizza2Flavors)
    .put("/pizza2flavors/:id", Pizza2Flavors.updatePizza2Flavors)
    .delete("/pizza2flavors/:id", Pizza2Flavors.deletePizza2Flavors)
    .delete("/pizza2flavors", Pizza2Flavors.deleteAllPizza2Flavors);

export default router;