import pizzas from '../models/Pizza.js'

class PizzaController { 
    static getPizzas = (req, res) => {
        pizzas.find((err, pizzas) => {
            if (err)
                res.status(400).send({message: `${err.message} - falha ao encontrar pizzas.`})
            else   
                res.status(200).json(pizzas)   
        })
    }

    static getPizzasById = (req, res) => {
        const id = req.params.id_pizza
        pizzas.findById(id, (err, pizza) => {
            if (err)
                res.status(400).send({message: `${err.message} - falha ao encontrar pizza desejada.`})
            else   
                res.status(200).send(pizza.toJSON())   
        })
    }

    static createPizza = (req, res) => {
        let pizza = new pizzas(req.body)
        pizza.save((err) => {
            if (err)
                res.status(500).send({message: `${err.message} - falha ao cadastrar a pizza.`})
            else   
                res.status(201).send(pizza.toJSON())
        })
    }

    static updatePizza = (req, res) => {
        const id = req.params.id_pizza
        pizzas.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (err)
                res.status(500).send({message: `${err.message} - falha ao atualizar a pizza.`})
            else   
                res.status(200).send({message: `Pizza atualizada com sucesso!`})
        })
    }

    static deletePizza = (req, res) => {
        const id = req.params.id_pizza
        pizzas.findByIdAndDelete(id, (err) => {
            if (err)
                res.status(500).send({message: `${err.message} - falha ao deletar a pizza.`})
            else   
                res.status(200).send({message: `Pizza deletada com sucesso!`})
        })
    }
}

export default PizzaController;