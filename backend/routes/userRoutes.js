const express = require("express");
const router = express.Router()
const authMiddleware = require("../middleware/authMiddleware")


const { registerUser, loginUser, logoutUser, updateUser } = require("../controllers/userController")


router.post("/register", registerUser)

router.post("/login", loginUser)

router.post('/logout', logoutUser)

router.put('/update', authMiddleware ,updateUser)


module.exports = router