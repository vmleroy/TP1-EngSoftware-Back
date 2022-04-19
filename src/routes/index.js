import express from "express";
import pizza from "./api/pizzaRoute.js"
import adress from "./api/adressRoute.js"
import user from "./api/userRoute.js"
import drink from "./api/drinkRoute.js"
import order from "./api/orderRoute.js"

const routes = (app) => {
    app.route('/').get( (req, res) => {
        res.status(200).send({titulo: "Pizzaria Tp1-Engenharia de Software"})
    })
    app.use(
        express.json(),
        pizza
    )
    app.use(
        express.json(),
        adress
    )
    app.use(
        express.json(),
        user
    )
    app.use(
        express.json(),
        drink
    )
    app.use(
        express.json(),
        order
    )

}

export default routes
