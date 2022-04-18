import express from "express";
import AdressController from "../../controllers/adressController.js";

const router = express.Router();

router
    .get("/endereco", AdressController.getAdresses)
    .get("/endereco/:id_endereco", AdressController.getAdressesById)
    .post("/endereco", AdressController.createAdress)
    .put("/endereco/:id_endereco", AdressController.updateAdress)
    .delete("/endereco/:id_endereco", AdressController.deleteAdress)


export default router