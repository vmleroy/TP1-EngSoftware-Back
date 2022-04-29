import Order from '../models/Order.js';

class orderController {
  static getOrders(req, res) {
    Order.find((err, orders) => {
      if (err)
        res.status(400).send({message: `${err.message} - falha ao requisitar pedidos.`})
      else   
        res.status(200).json(orders)  
    }).populate('user').populate('pizzas').populate('drinks')
  }

  static getOrdersByUserId(req, res) {
    Order.find({user: req.params.id}, (err, orders) => {
      if (err)
        res.status(400).send({message: `${err.message} - falha ao requisitar pedidos.`})
      else
        res.status(200).json(orders)
    }).populate('pizzas').populate('drinks')
  }

  static createOrder(req, res) {
    console.log(req.body)
    const newOrder = new Order(req.body)
    newOrder.number = Math.floor(Math.random() * (9999 - 1000) + 1000);
    newOrder.createDate = Date.now();
    newOrder.status = 'pending';
    newOrder.save((err, order) => {
      if (err)
        res.status(400).send({message: `${err.message} - falha ao criar pedido.`})
      else
        res.status(200).send(order)
    })
  }

  static getOrderById(req, res) {
    Order.findById(req.params.id, (err, order) => {
      if (err)
        res.status(400).send({message: `${err.message} - falha ao requisitar pedido.`})
      else
        res.status(200).json(order)
    })
  }

  static updateOrder(req, res) {
    Order.findByIdAndUpdate(req.params.id, req.body, (err, order) => {
      if (err)
        res.status(400).send({message: `${err.message} - falha ao atualizar pedido.`})
      else
      res.status(200).send(order)
    })
  }

  static deleteOrder(req, res) {
    Order.findByIdAndRemove(req.params.id, (err, order) => {
      if (err)
        res.status(400).send({message: `${err.message} - falha ao remover pedido.`})
      else
        res.status(200).send({ message: `Pedido removido com sucesso!`})
    })
  }

  static deleteAllOrders(req, res) {
    Order.remove({}, (err, order) => {
      if (err)
        res.status(400).send({message: `${err.message} - falha ao remover pedidos.`})
      else
        res.status(200).send({ message: `Pedidos removidos com sucesso!`})
    })
  }
}

export default orderController