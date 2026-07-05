const express = require("express")

const router = express.Router()
const authMiddleware = require("../middleware/authMiddleware")

const { checkVisitorQR, checkInVisitor, checkOutVisitor, rejectEntry } = require("../controllers/securityController")


router.put("/scan", authMiddleware, checkVisitorQR)

router.put("/checkin/:id", authMiddleware, checkInVisitor)

router.put("/checkout/:id", authMiddleware, checkOutVisitor)

router.put("/reject/:id", authMiddleware, rejectEntry)


module.exports = router 