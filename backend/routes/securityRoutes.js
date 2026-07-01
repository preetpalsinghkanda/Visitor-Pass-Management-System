const express = require("express")

const router = express.Router()
const authMiddleware = require("../middleware/authMiddleware")

const { checkVisitorQR } = require("../controllers/securityController")


router.put("/scan", authMiddleware, checkVisitorQR)


module.exports = router 