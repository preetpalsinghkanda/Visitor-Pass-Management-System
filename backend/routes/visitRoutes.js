const express = require("express")
const router = express.Router()

const authMiddleware = require("../middleware/authMiddleware")

const { createVisit , getMyVisits } = require("../controllers/visitController")


router.post("/", authMiddleware, createVisit)

router.get("/my" , authMiddleware , getMyVisits)



module.exports = router