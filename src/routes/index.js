import express from "express";
import pizza from "./pizzaRoute.js"

const routes = (app) => {
    app.route('/').get( (req, res) => {
        res.status(200).send({titulo: "Pizzaria Tp1-Engenharia de Software"})
    })
    app.use (
        express.json(),
        pizza
    )
}

export default routes
