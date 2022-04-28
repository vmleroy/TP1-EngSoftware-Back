import user from '../models/User.js'
import bcrypt from "bcrypt"
import dotenv from 'dotenv'
dotenv.config();

// Declaring a "cost factor" to control the um needed time to calculate the password hashing.
// The saltRounds is used by the bcrypt dependency as a parameter to generate the hashed password.
const saltRounds = 10;

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
    user.findByIdAndRemove(req.params.id, (err, user) => {
      if (err)
        res.status(400).send({message: `${err.message} - falha ao requisitar usuário.`})
      else
        res.status(200).json(user)
    })
  }

  static createUser = (req, res) => {
    const newUser = new user(req.body)
    newUser.roles.push('user')

    // The user password will be hashed before being stored in the DB, according to the saltRounds:
    bcrypt.hash(newUser.password, saltRounds, (err, hash) => {
      if (err) {
        res.status(400).send({message: `${err.message} - falha ao criar senha.`})
      }
      else
        // If everything is ok, then newUser.password receives the hashed password:
        newUser.password = hash
        newUser.save((err, user) => {
          if (err)
            res.status(400).send({message: `${err.message} - falha ao criar usuário.`})
          else
            res.status(200).send({ message: `Usuario criado com sucesso!`})
        })
    })
  }

  static userLogin = (req, res) => {
    // Getting userEmail and userPassword from the POST login request:
    const { email, password } = req.body

    // Find the user according to the email used in the login:
    user.findOne({ email: email }, (err, user) => {
      if (err)
        res.status(401).send({message: `${err.message} - nao autorizado.`})
      else {
        // If the user is found, then we need to validate the password:
        bcrypt.compare(user.password, password, function(err, result) {
          if (err)
            res.status(401).send({message: `${err.message} - nao autorizado.`})
          else
            // If the passwords match, login password is correct so return the user:
            res.status(200).json(user)
        })
      }
    })
  }

  static updateUser = (req, res) => {
    user.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
      if (err)
        res.status(400).send({message: `${err.message} - falha ao atualizar usuário.`})
      else
        res.status(200).send({ message: `Usuario atualizado com sucesso!`})
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