import express from "express";
import pizza from "./api/pizzaRoute.js"
import adress from "./api/adressRoute.js"

const routes = (app) => {
    app.route('/').get( (req, res) => {
        res.status(200).send({titulo: "Pizzaria Tp1-Engenharia de Software"})
    })
    app.use(
        express.json(),
        pizza
    )
    app.use (
        express.json(),
        adress
    )
}

export default routes
