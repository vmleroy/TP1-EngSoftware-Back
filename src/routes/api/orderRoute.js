import express from "express";
import OrderController from "../../controllers/orderController.js";

const router = express.Router();

router
    .get("/pedido", OrderController.getOrders)
    .get("/pedido/:id", OrderController.getOrderById)
    .post("/pedido", OrderController.createOrder)
    .put("/pedido/:id", OrderController.updateOrder)
    .delete("/pedido/:id", OrderController.deleteOrder)
    .delete("/pedido", OrderController.deleteAllOrders)

export default router;
