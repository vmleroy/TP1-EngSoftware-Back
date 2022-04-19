import adress from '../models/Adress.js'

class AdressController {
    static getAdresses = (req, res) => {
        adress.find((err, adresses) => {
            if (err)
                res.status(400).send({message: `${err.message} - falha ao requisitar endereços.`})
            else   
                res.status(200).json(adresses)  
        })
    }

    static createAdress = (req, res) => {
            const newAdress = new adress(req.body)
            newAdress.save((err, adress) => {
                if (err)
                    res.status(400).send({message: `${err.message} - falha ao criar endereço.`})
                else
                    res.status(200).json(adress)
            })
        }

    static getAdressById = (req, res) => {
        adress.findById(req.params.id, (err, adress) => {
            if (err)
                res.status(400).send({message: `${err.message} - falha ao requisitar endereço.`})
            else
                res.status(200).json(adress)
        })
    }

    static updateAdress = (req, res) => {
        adress.findByIdAndUpdate(req.params.id, req.body, (err, adress) => {
            if (err)
                res.status(400).send({message: `${err.message} - falha ao atualizar endereço.`})
            else
                res.status(200).json(adress)
        })
    }

    static deleteAdress = (req, res) => {
        adress.findByIdAndRemove(req.params.id, (err, adress) => {
            if (err)
                res.status(400).send({message: `${err.message} - falha ao deletar endereço.`})
            else
                res.status(200).json(adress)
        })
    }
}

export default AdressController;