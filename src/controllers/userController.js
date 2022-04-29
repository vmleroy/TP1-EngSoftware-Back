import user from '../models/User.js'
import md5 from 'md5'
import dotenv from 'dotenv'
dotenv.config();

class UserController {
  static getUsers = (req, res) => {
    user.find((err, users) => {
      if (err)
        res.status(400).send({message: `${err.message} - falha ao requisitar usuários.`})
      else   
        res.status(200).json(users)  
    }).populate('address')
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
    newUser.password = md5(newUser.password + process.env.SALT_KEY)
    newUser.save((err, user) => {
      if (err)
        res.status(400).send({message: `${err.message} - falha ao criar usuário.`})
      else
        res.status(200).send(user)
    })
  }

  static loginUser = (req, res) => {
    let {email, password} = req.body
    password = md5(password + process.env.SALT_KEY)
    user.findOne({email:email},(err, user) => {
      if (err)
        res.status(400).send({message: `${err.message} - falha ao requisitar usuários.`})
      else if (user) {
        if (user.password === password)
          res.status(200).json(user);
        else
          res.status(403).send({message: ` - Acesso proibido.`})
            }
      else
        res.status(404).send({message: ` - falha ao encontrar usuário.`})
    })
  }

  static updateUser = (req, res) => {
    user.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
      if (err)
        res.status(400).send({message: `${err.message} - falha ao atualizar usuário.`})
      else
        res.status(200).send(user)
    })
  }

  static deleteUser = (req, res) => {
    user.findByIdAndRemove(req.params.id, (err, user) => {
      if (err)
        res.status(400).send({message: `${err.message} - falha ao remover usuário.`})
      else
        res.status(200).send({ message: `Usuario removido com sucesso!`})
    })
  }

}

export default UserController;