const express = require("express")
const router = express.Router()


const authMiddleware = require("../middleware/authMiddleware")
const roleMiddleware = require("../middleware/roleMiddleware")

const { getAllUsers, getSingleUser, deleteVisit, createUser, updateUser, deleteUser, banUser, unbanUser, getAllVisits } = require("../controllers/adminController")


router.get('/users', authMiddleware, roleMiddleware("admin"), getAllUsers)

router.get('/users/:id', authMiddleware, roleMiddleware("admin"), getSingleUser)

router.post("/users", authMiddleware, roleMiddleware("admin"), createUser)
router.delete("/users/:id", authMiddleware, roleMiddleware("admin"), deleteUser)

router.put('/users/:id', authMiddleware, roleMiddleware("admin"), updateUser)

router.patch('/users/:id/ban', authMiddleware, roleMiddleware("admin"), banUser)

router.patch("/users/:id/unban", authMiddleware, roleMiddleware("admin"), unbanUser)

router.get("/all-visits", authMiddleware, roleMiddleware("admin"), getAllVisits)

router.delete("/visit/:id", authMiddleware, roleMiddleware("admin"), deleteVisit)




module.exports = router 