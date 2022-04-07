import express from "express"
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'Failed to connect to DB'))
db.once("open", () => {
    console.log('Connection with DB established')
})

const app = express()
app.use(express.json())
routes(app)

export default app