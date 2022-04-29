import express from "express";
import pizza from "./api/pizzaRoute.js"
import address from "./api/addressRoute.js"
import user from "./api/userRoute.js"
import drink from "./api/drinkRoute.js"
import order from "./api/orderRoute.js"
import pizza2flavors from "./api/pizza2FlavorsRoute.js"
import promo from "./api/promoRoute.js"

const routes = (app) => {
    app.route('/').get( (req, res) => {
        res.status(200).send({titulo: "Pizzaria Tp1-Engenharia de Software"})
    })
    app.use(express.json(),pizza)
    app.use(express.json(),address)
    app.use(express.json(),user)
    app.use(express.json(),drink)
    app.use(express.json(),order)
    app.use(express.json(), pizza2flavors)
    app.use(express.json(), promo)
}

export default routes
