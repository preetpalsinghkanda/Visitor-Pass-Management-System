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
const employeeRoutes = require('./routes/employeeRoutes');
const securityRoutes = require("./routes/securityRoutes");

app.use(cors({
    origin: ["http://localhost:5173", "https://visitor-pass-management-system-eb68.vercel.app"],
    credentials: true,
}))
app.use(express.json())

app.use(cookieParser())

connectDataBase();

app.use("/users", userRoutes)

app.use("/admin", adminRoutes)


app.use("/dashboard", dashboardRoutes)

app.use('/visits', visitRoutes)

app.use('/employee', employeeRoutes)
app.use('/security', securityRoutes)


app.get("/", (req, res) => {
    res.json({ message: "backend is live" })
})


// app.listen(PORT, () => {
//     console.log(`server running on ${PORT}`)
// })

module.exports = app