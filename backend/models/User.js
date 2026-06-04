const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        firebaseId :{
            type : String,
            required : true,
            unique : true,
        },
        name : {
            type : String,
            required : true,
        },
        email : {
            type : String,
            unique : true,
            required : true,
        },
        role : {
            type: String,
            enum : ["visitor" , "employee" , "admin" , "security"],
            default  : "visitor" ,
        }
    }
)


module.exports = mongoose.model("User" , userSchema);