const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            lowercase: true,
            trim: true,

        },
        password: {
            type: String,
            required: true,
            minlength: 6

        },

        phone: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: 10,
            maxlength: 10,

        }
        ,
        role: {
            type: String,
            enum: ["visitor", "employee", "admin", "security"],
            default: "visitor",
        },

        isUserBanned: {
            type: Boolean,
            default: false,

        },

        photo: {
            type: String,
            default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        }


    },

    {
        timestamps: true,
    }
)


module.exports = mongoose.model("User", userSchema);