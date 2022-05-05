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

    static createAddress = async (req, res) => {
            const newAdress = new adress(req.body)
            const addressFind = await adress.find({street: req.body.street, number: req.body.number, district: req.body.district, city: req.body.city})

            if(addressFind.length > 0) {
                res.status(400).send('addressFind')
            } else {
                console.log("Teste: ", addressFind)
                newAdress.save((err, adress) => {
                    if (err)
                        res.status(400).send({message: `${err.message} - falha ao criar endereço.`})
                    else
                        res.status(200).send(adress)
                })
            }
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
                res.status(200).send(adress)
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