const express = require("express")
const router = express.Router()

const authMiddleware = require("../middleware/authMiddleware")


const { getEmployeeVisits, approveVisit, rejectVisit } = require("../controllers/employeeController")


router.get("/visits", authMiddleware, getEmployeeVisits)

router.put('/approve/:id', authMiddleware, approveVisit)

router.put('/reject/:id', authMiddleware, rejectVisit)


module.exports = router