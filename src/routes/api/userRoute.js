import express from "express";
import UserController from "../../controllers/userController.js";

const router = express.Router();

router 
    .get("/usuario", UserController.getUsers)
    .get("/usuario/:id", UserController.getUserById)
    .post("/usuario", UserController.createUser)
    .post("/loginUsuario", UserController.userLogin)
    .put("/usuario/:id", UserController.updateUser)
    .delete("/usuario/:id", UserController.deleteUser)
    
export default router;

/*
POST '/usuario' example:

OBS: it is necessary to create an address first!

{
	"name": "name",
	"email": "email",
	"password": "password",
	"cpf": "cpf",
	"phone": "phone",
	"address": "address_id"
}

POST '/loginUsuario' example:
{
	"email": "email",
	"password": "password"
}
 */
