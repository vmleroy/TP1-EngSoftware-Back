import Pizza2Flavors from '../models/Pizza2Flavors.js'
import Pizza from '../models/Pizza.js'

class pizza2Flavors {
  static getPizza2Flavors = (req, res) => {
    Pizza2Flavors.find((err, pizza2Flavors) => {
      if (err)
        res.status(400).send({message: `${err.message} - falha ao requisitar pizza2Flavors.`})
      else   
        res.status(200).send(pizza2Flavors)  
    }).populate('pizza1').populate('pizza2')
  }

  static createPizza2Flavors = (req, res) => {
    const newPizza2Flavors = new Pizza2Flavors(req.body)
    function findNameById (id) {
      return new Promise((resolve, reject) => {
        Pizza.findById(id, (err, pizza) => {
          if (err)
            reject(err)
          else
            resolve(pizza)
        })
      })
    }

    findNameById(req.body.pizza1).then((pizza1) => {
      findNameById(req.body.pizza2).then((pizza2) => {
        newPizza2Flavors.name = pizza1.name + ' + ' + pizza2.name 
        newPizza2Flavors.description = 'Pizzas: ' + pizza1.name + ' e ' + pizza2.name + ' meio a meio'
        newPizza2Flavors.price = Math.round(((pizza1.price) * 0.5 + (pizza2.price) * 0.5) * 0.9, 2)
        newPizza2Flavors.save((err) => {
          if (err)
            res.status(500).send({message: `${err.message} - falha ao cadastrar pizza2Flavors.`})
          else
            res.status(201).send(newPizza2Flavors.toJSON())
        })
      })
    })
  }

  static getPizza2FlavorsById = (req, res) => {
    Pizza2Flavors.findById(req.params.id, (err, pizza2Flavors) => {
      if (err)
        res.status(400).send({message: `${err.message} - falha ao requisitar pizza2Flavors.`})
      else
        res.status(200).json(pizza2Flavors)
    })
  }

  static updatePizza2Flavors = (req, res) => {
    Pizza2Flavors.findByIdAndUpdate(req.params.id, req.body, (err, pizza2Flavors) => {
      if (err)
        res.status(400).send({message: `${err.message} - falha ao atualizar pizza2Flavors.`})
      else
        res.status(200).json(pizza2Flavors)
    })
  }

  static deletePizza2Flavors = (req, res) => {
    Pizza2Flavors.findByIdAndRemove(req.params.id, (err, pizza2Flavors) => {
      if (err)
        res.status(400).send({message: `${err.message} - falha ao deletar pizza2Flavors.`})
      else
        res.status(200).json(pizza2Flavors)
    })
  }

  static deleteAllPizza2Flavors = (req, res) => {
    Pizza2Flavors.deleteMany({}, (err) => {
      if (err)
        res.status(400).send({message: `${err.message} - falha ao deletar pizza2Flavors.`})
      else
        res.status(200).send({message: `Todos os pizza2Flavors foram deletados com sucesso!`})
    })
  }
}

export default pizza2Flavors;