const express = require("express")
const router = express.Router()

const authMiddleware = require("../middleware/authMiddleware")


const { getEmployeeVisits } = require("../controllers/employeeController")


router.get("/visits" , authMiddleware , getEmployeeVisits)


module.exports = router