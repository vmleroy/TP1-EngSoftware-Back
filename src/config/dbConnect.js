import mongoose from "mongoose"

mongoose.connect("mongodb+srv://admin:admin@tp1-engsoftware.2ukzi.mongodb.net/Pizzaria")

let db = mongoose.connection

export default db