import adress from '../models/Pizza.js'

class AdressController {
  static getAdresses = (req, res) => {
      adress.find((err, adresses) => {
          if (err)
              res.status(400).send({message: `${err.message} - falha ao requisitar endereços.`})
          else   
              res.status(200).json(adresses)  
      })
  }

  static getAdressesById = (req, res) => {
      const id = req.params.id_adress
      adress.findById(id, (err, adress) => {
          if (err)
              res.status(400).send({message: `${err.message} - falha ao encontrar endereço desejado.`})
          else   
              res.status(200).send(adress.toJSON())   
      })
  }

  static createAdress = (req, res) => {
      let adress = new adress(req.body)
      adress.save((err) => {
          if (err)
              res.status(500).send({message: `${err.message} - falha ao cadastrar endereço.`})
          else   
              res.status(201).send(adress.toJSON())
      })
  }

  static updateAdress = (req, res) => {
      const id = req.params.id_adress
      adress.findByIdAndUpdate(id, {$set: req.body}, (err) => {
          if (err)
              res.status(500).send({message: `${err.message} - falha ao atualizar endereço.`})
          else   
              res.status(200).send({message: `Endereço atualizado com sucesso!`})
      })
  }

  static deleteAdress = (req, res) => {
      const id = req.params.id_adress
      adress.findByIdAndDelete(id, (err) => {
          if (err)
              res.status(500).send({message: `${err.message} - falha ao deletar endereço.`})
          else   
              res.status(200).send({message: `Endereço deletado com sucesso!`})
      })
  }
}

export default AdressController;