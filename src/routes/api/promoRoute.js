import express from "express";
import PromoController from "../../controllers/promoController.js";

const router = express.Router();

router
    .get("/promo", PromoController.getPromos)
    .get("/promo/:id", PromoController.getPromoById)
    .post("/promo", PromoController.createPromo)
    .put("/promo/:id", PromoController.updatePromo)
    .delete("/promo/:id", PromoController.deletePromo)
    .delete("/promo", PromoController.deleteAllPromos);

export default router;
