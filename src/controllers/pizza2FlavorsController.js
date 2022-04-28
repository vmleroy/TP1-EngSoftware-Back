import pizza2Flavors from '../models/Pizza2Flavors.js'
import Pizza from '../models/Pizza.js'

class pizza2FlavorsController {
  static getPizza2Flavors = (req, res) => {
   pizza2Flavors.find((err,pizza2Flavors) => {
      if (err)
        res.status(400).send({message: `${err.message} - falha ao requisitarpizza2Flavors.`})
      else   
        res.status(200).send(pizza2Flavors)  
    }).populate('pizza1').populate('pizza2')
  }

  static createPizza2Flavors = async (req, res) => {
    const newPizza2Flavors = new pizza2Flavors(req.body)
    const pizza2FlavorsFind = await pizza2Flavors.find({pizza1: req.body.pizza1, pizza2: req.body.pizza2})

    if(pizza2FlavorsFind.length > 0) {
      res.status(200).send(pizza2FlavorsFind)
    } else {
      const pizza1 = await Pizza.findById(newPizza2Flavors.pizza1)
      const pizza2 = await Pizza.findById(newPizza2Flavors.pizza2)

      newPizza2Flavors.name = pizza1.name + ' & ' + pizza2.name + ' (meio a meio)'
      newPizza2Flavors.description = 'Pizzas: ' + pizza1.name + ' e ' + pizza2.name + ' meio a meio'
      newPizza2Flavors.price = Math.round(((pizza1.price) * 0.5 + (pizza2.price) * 0.5) * 0.9, 2)
      newPizza2Flavors.save((err) => {
        if (err)
          res.status(500).send({message: `${err.message} - falha ao criar pizza 2 sabores.`})
        else
          res.status(200).send(newPizza2Flavors)
      })
    }
  }

  static getPizza2FlavorsById = (req, res) => {
  pizza2Flavors.findById(req.params.id, (err,pizza2Flavors) => {
      if (err)
        res.status(400).send({message: `${err.message} - falha ao requisitar pizza 2 sabores.`})
      else
        res.status(200).json(pizza2Flavors)
    })
  }

  static updatePizza2Flavors = (req, res) => {
   pizza2Flavors.findByIdAndUpdate(req.params.id, req.body, (err,pizza2Flavors) => {
      if (err)
        res.status(400).send({message: `${err.message} - falha ao atualizar pizza 2 sabores.`})
      else
      res.status(200).send(pizza2Flavors)
    })
  }

  static deletePizza2Flavors = (req, res) => {
   pizza2Flavors.findByIdAndRemove(req.params.id, (err,pizza2Flavors) => {
      if (err)
        res.status(400).send({message: `${err.message} - falha ao deletar pizza 2 sabores.`})
      else
        res.status(200).send({ message: `Pizza de 2 sabores removida com sucesso!`})
    })
  }

  static deleteAllPizza2Flavors = (req, res) => {
   pizza2Flavors.deleteMany({}, (err) => {
      if (err)
        res.status(400).send({message: `${err.message} - falha ao remover pizza de 2 sabores.`})
      else
        res.status(200).send({message: `Todos as pizzas 2 sabores foram removidas com sucesso!`})
    })
  }
}

export default pizza2FlavorsController;