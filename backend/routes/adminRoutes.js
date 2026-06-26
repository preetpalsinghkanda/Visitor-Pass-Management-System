const express = require("express")
const router = express.Router()


const authMiddleware = require("../middleware/authMiddleware")
const roleMiddleware = require("../middleware/roleMiddleware")

const {getAllUsers , getSingleUser , createUser , updateUser} = require("../controllers/adminController")


router.get('/users' , authMiddleware , roleMiddleware("admin"), getAllUsers)

router.get('/users/:id' , authMiddleware , roleMiddleware("admin") , getSingleUser)

router.post("/users" , authMiddleware , roleMiddleware("admin") , createUser)

router.put ('/users/:id' , authMiddleware ,roleMiddleware("admin") , updateUser)


module.exports = router 