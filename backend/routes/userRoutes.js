const express = require("express");
const router = express.Router()
const authMiddleware = require("../middleware/authMiddleware")
const upload = require("../middleware/upload")


const { registerUser, loginUser, logoutUser, updateUser, updateProfilePhoto } = require("../controllers/userController")


router.post("/register", registerUser)

router.post("/login", loginUser)

router.post('/logout', logoutUser)

router.put('/update', authMiddleware, updateUser)

router.put("/update-profile-photo", authMiddleware, upload.single("photo"), updateProfilePhoto)


module.exports = router