const multer = require("multer")
const { CloudinaryStorage } = require("multer-storage-cloudinary")
const cloudinary = require("../config/cloudinary")

const storage = new CloudinaryStorage({
    cloudinary, params: {
        folder: "Visitor-Profile-Photo",
        allowed_formats: ["jpeg", "jpg", "png"]
    }
})

const upload = multer({
    storage,
})



module.exports = upload