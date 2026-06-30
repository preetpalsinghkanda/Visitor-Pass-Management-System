const express = require("express")
const router = express.Router()

const authMiddleware = require("../middleware/authMiddleware")


const { getEmployeePendingVisits, getEmployeeRequests, getAllEmployeeVisits, approveVisit, rejectVisit } = require("../controllers/employeeController")


router.get("/visits/pending", authMiddleware, getEmployeePendingVisits)

router.put('/approve/:id', authMiddleware, approveVisit)

router.put('/reject/:id', authMiddleware, rejectVisit)

router.get("/all-visits", authMiddleware, getAllEmployeeVisits)

router.get("/request" , authMiddleware , getEmployeeRequests)


module.exports = router