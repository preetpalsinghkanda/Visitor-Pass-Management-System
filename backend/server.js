const express = require("express")
const app = express();
require("dotenv").config()
const PORT = process.env.PORT || 5000
const connectDataBase = require('./config/db')
const cors = require("cors");
const cookieParser = require("cookie-parser")

const userRoutes = require("./routes/userRoutes")

app.use(cors())
app.use(express.json())

app.use(cookieParser())

connectDataBase();

app.use("/users" , userRoutes)


















app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})

