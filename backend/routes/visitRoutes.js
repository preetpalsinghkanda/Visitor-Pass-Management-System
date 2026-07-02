const express = require("express")
const router = express.Router()

const authMiddleware = require("../middleware/authMiddleware")

const { createVisit, getMyVisits, getVisitPass } = require("../controllers/visitController")


router.post("/", authMiddleware, createVisit)

router.get("/my", authMiddleware, getMyVisits)

router.get("/pass/:id", authMiddleware, getVisitPass)



module.exports = router