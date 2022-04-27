import adress from '../models/Address.js'

class AddressController {
    static getAddresses = (req, res) => {
        adress.find((err, adresses) => {
            if (err)
                res.status(400).send({message: `${err.message} - falha ao requisitar endereços.`})
            else   
                res.status(200).json(adresses)  
        })
    }

    static createAddress = (req, res) => {
            const newAdress = new adress(req.body)
            newAdress.save((err, adress) => {
                if (err)
                    res.status(400).send({message: `${err.message} - falha ao criar endereço.`})
                else
                    res.status(200).send({ message: `Endereço criado com sucesso!`})
            })
        }

    static getAddressById = (req, res) => {
        adress.findById(req.params.id, (err, adress) => {
            if (err)
                res.status(400).send({message: `${err.message} - falha ao requisitar endereço.`})
            else
                res.status(200).json(adress)
        })
    }

    static updateAddress = (req, res) => {
        adress.findByIdAndUpdate(req.params.id, req.body, (err, adress) => {
            if (err)
                res.status(400).send({message: `${err.message} - falha ao atualizar endereço.`})
            else
                res.status(200).send({ message: `Endereço atualizado com sucesso!`})
        })
    }

    static deleteAddress = (req, res) => {
        adress.findByIdAndRemove(req.params.id, (err, adress) => {
            if (err)
                res.status(400).send({message: `${err.message} - falha ao remover endereço.`})
            else
                res.status(200).send({ message: `Endereço removido com sucesso!`})
        })
    }
}

export default AddressController;