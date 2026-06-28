const express = require("express")
const app = express();
require("dotenv").config()
const PORT = process.env.PORT || 5000
const connectDataBase = require('./config/db')
const cors = require("cors");
const cookieParser = require("cookie-parser")

const userRoutes = require("./routes/userRoutes")
const adminRoutes = require('./routes/adminRoutes')
const dashboardRoutes = require("./routes/dashboardRoutes")
const visitRoutes = require("./routes/visitRoutes")

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))
app.use(express.json())

app.use(cookieParser())

connectDataBase();

app.use("/users", userRoutes)

app.use("/admin", adminRoutes)


app.use("/dashboard", dashboardRoutes)

app.use('/visits', visitRoutes)





app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})

