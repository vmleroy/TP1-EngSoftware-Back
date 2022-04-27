import drink from '../models/Drink.js';

class DrinkController {
  static getDrinks = (req, res) => {
    drink.find((err, drinks) => {
      if (err)
        res.status(400).send({message: `${err.message} - falha ao requisitar bebidas.`})
      else   
        res.status(200).json(drinks)  
    })
  }

  static createDrink = (req, res) => {
    const newDrink = new drink(req.body)
    newDrink.save((err, drink) => {
      if (err)
        res.status(400).send({message: `${err.message} - falha ao criar bebida.`})
      else
        res.status(200).send({ message: `Bebida criada com sucesso!`})
    })
  }

  static getDrinkById = (req, res) => {
    drink.findById(req.params.id, (err, drink) => {
      if (err)
        res.status(400).send({message: `${err.message} - falha ao requisitar bebida.`})
      else
        res.status(200).json(drink)
    })
  }

  static updateDrink = (req, res) => {
    drink.findByIdAndUpdate(req.params.id, req.body, (err, drink) => {
      if (err)
        res.status(400).send({message: `${err.message} - falha ao atualizar bebida.`})
      else
      res.status(200).send({ message: `Bebida atualizada com sucesso!`})
    })
  }

  static deleteDrink = (req, res) => {
    drink.findByIdAndRemove(req.params.id, (err, drink) => {
      if (err)
        res.status(400).send({message: `${err.message} - falha ao remover bebida.`})
      else
        res.status(200).send({ message: `Bebida removida com sucesso!`})
    })
  }
}

export default DrinkController;