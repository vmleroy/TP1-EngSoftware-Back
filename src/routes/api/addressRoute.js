import express from "express";
import AddressController from "../../controllers/addressController.js";

const router = express.Router();

router
    .get("/endereco", AddressController.getAddresses)
    .get("/endereco/:id", AddressController.getAddressById)
    .post("/endereco", AddressController.createAddress)
    .put("/endereco/:id", AddressController.updateAddress)
    .delete("/endereco/:id", AddressController.deleteAddress)

export default router