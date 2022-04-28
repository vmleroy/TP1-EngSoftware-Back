import express from "express";
import UserController from "../../controllers/userController.js";

const router = express.Router();

router 
    .get("/usuario", UserController.getUsers)
    .get("/usuario/:id", UserController.getUserById)

    .post("/usuario", UserController.createUser)
    .post("/login", UserController.loginUser)

    .put("/usuario/:id", UserController.updateUser)

    .delete("/usuario/:id", UserController.deleteUser)
    
export default router;