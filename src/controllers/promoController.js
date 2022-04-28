import promo from '../models/Promo.js'
import Pizza from '../models/Pizza.js'
import Drink from '../models/Pizza.js'
import Pizza2Flavor from '../models/Pizza2Flavors.js'

class PromoController {
  static getPromos = (req, res) => {
    promo.find((err, promos) => {
      if(err)
        res.status(400).send({ message: `${err.message} - falha ao requisitar promoções.`})
      else
        res.status(200).send(promos)
    })
  }

  static createPromo = async (req, res) => {
    function nameQuantity(arr){
      const arrWithoutDuplic = arr.filter((item, index) => arr.indexOf(item) === index)
      const arrNamesQuantity = arrWithoutDuplic.map(item => arr.filter(food => food === item).length)

      let name;
      for(let i = 0; i < arrWithoutDuplic.length; i++) {
        name += ` ${arrWithoutDuplic[i]} ${arrNamesQuantity[i]}x +`
      }

      return name
    }

    const newPromo = new promo(req.body)
    newPromo.price = 0;

    let pizzasNames = [];
    let pizzas2FlavorsNames = [];
    let drinksNames = [];

    if(req.body.pizzas != null) {
      for(let pizza of req.body.pizzas) {
        const pizzaFind = await Pizza.findById(pizza)
        newPromo.price += pizzaFind.price
        pizzasNames.push(pizzaFind.name)
      }
    }

    if(req.body.pizzas2flavors != null) {
      for(let pizza2flavor of req.body.pizzas2flavors) {
        const pizza2flavorFind = await Pizza2Flavor.findById(pizza2flavor)
        newPromo.price += pizza2flavorFind.price
        pizzas2FlavorsNames.push(pizza2flavorFind.name)
      }
   }

    if(req.body.drinks != null) {
      for(let drink of req.body.drinks) {
        const drinkFind = await Drink.findById(drink)
        newPromo.price += drinkFind.price
        drinksNames.push(drinkFind.name)
      }
    }

    newPromo.name = `${nameQuantity(pizzasNames)} ${nameQuantity(pizzas2FlavorsNames)} ${nameQuantity(drinksNames)}`

    newPromo.name = newPromo.name.replace(/undefined/g, '')
    newPromo.name = newPromo.name.slice(1, newPromo.name.length - 3)
    
    newPromo.originalPrice = newPromo.price
    newPromo.promoPrice = (newPromo.originalPrice * (1 - (newPromo.discount/100)))

    newPromo.save((err, promo) => {
      if(err)
        res.status(400).send({ message: `${err.message} - falha ao criar promoção.`})
      else
        res.status(200).send(promo)
    })
  }

  static getPromoById = (req, res) => {
    promo.findById((err, promo) => {
      if(err)
        res.status(400).send({ message: `${err.message} - falha ao requisitar promoção.`})
      else
        res.status(200).send(promo)
    })
  }

  static updatePromo = (req, res) => {
    promo.findByIdAndUpdate(req.params.id, req.body, (err, promo) => {
      if(err)
        res.status(400).send({ message: `${err.message} - falha ao atualizar promoção.`})
      else
        res.status(200).send(promo)
    })
  }

  static deletePromo = (req, res) => {
    promo.findByIdAndRemove(req. params.id, (err, promo) => {
      if(err)
        res.status(400).send({ message: `${err.message} - falha ao remover promoção.`})
      else
        res.status(200).send({ message: `Promoção removida com sucesso!`})
    })
  }

  static deleteAllPromos = (req, res) => {
    promo.remove({}, (err, promo) => {
      if(err)
        res.status(400).send({ message: `${err.message} - falha ao remover promoções.`})
      else
        res.status(200).send({ message: `Promoções removidas com sucesso!`})
    })
  }
}

export default PromoController;