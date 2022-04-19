import express from "express";
import AdressController from "../../controllers/adressController.js";

const router = express.Router();

router
    .get("/endereco", AdressController.getAdresses)
    .get("/endereco/:id", AdressController.getAdressById)
    .post("/endereco", AdressController.createAdress)
    .put("/endereco/:id", AdressController.updateAdress)
    .delete("/endereco/:id", AdressController.deleteAdress)

export default router