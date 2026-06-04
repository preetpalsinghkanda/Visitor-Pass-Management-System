const express = require("express")
const app = express();
require("dotenv").config()
const PORT = process.env.PORT || 5000
const connectDataBase = require('./config/db')
const cors = require("cors");

const userRoutes = require("./routes/userRoutes")

app.use(cors())
app.use(express.json())



connectDataBase();

app.use("/users" , userRoutes)








app.get("/", (req, res) => {
    res.send("hello")
})
















app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})

