const express = require("express")
const router = express.Router()

const authMiddleware = require("../middleware/authMiddleware")

const { createVisit } = require("../controllers/visitController")


router.post("/", authMiddleware, createVisit)


module.exports = router