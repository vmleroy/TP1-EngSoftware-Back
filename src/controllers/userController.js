import user from '../models/User.js'

class UserController {
  static getUsers = (req, res) => {
    user.find((err, users) => {
      if (err)
        res.status(400).send({message: `${err.message} - falha ao requisitar usuários.`})
      else   
        res.status(200).json(users)  
    }).populate('adress')
  }

  static getUserById = (req, res) => {
    user.findById(req.params.id, (err, user) => {
      if (err)
        res.status(400).send({message: `${err.message} - falha ao requisitar usuário.`})
      else
        res.status(200).json(user)
    })
  }

  static createUser = (req, res) => {
    const newUser = new user(req.body)
    newUser.roles.push('user')
    newUser.save((err, user) => {
      if (err)
        res.status(400).send({message: `${err.message} - falha ao criar usuário.`})
      else
        res.status(200).json(user)
    })
  }

  static updateUser = (req, res) => {
    user.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
      if (err)
        res.status(400).send({message: `${err.message} - falha ao atualizar usuário.`})
      else
        res.status(200).json(user)
    })
  }

  static deleteUser = (req, res) => {
    user.findByIdAndRemove(req.params.id, (err, user) => {
      if (err)
        res.status(400).send({message: `${err.message} - falha ao deletar usuário.`})
      else
        res.status(200).json(user)
    })
  }

}

export default UserController;