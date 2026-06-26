const express = require("express")
const router = express.Router()


const authMiddleware = require("../middleware/authMiddleware")

const { accessDashboard } = require("../controllers/dashboardController")


router.get("/", authMiddleware, accessDashboard)


module.exports = router;