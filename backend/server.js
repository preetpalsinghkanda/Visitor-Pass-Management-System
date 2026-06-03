const express = require("express")
const app = express();
require("dotenv").config()
const connectDataBase = require('./config/db')

const PORT = process.env.PORT || 5000

connectDataBase();

app.get("/", (req, res) => {
    res.send("hello")
})

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})

