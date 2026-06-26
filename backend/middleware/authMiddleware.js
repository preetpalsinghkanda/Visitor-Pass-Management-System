const jwt = require("jsonwebtoken")
const User = require("../models/User")


const authMiddleware = async (req , res , next)=>{


    try{
    const token = req.cookies.token ;

    if(!token){
        return res.status(401).json({
            success : false ,
            message : "LOGIN FIRST!"
        })
    }

    const verifyJWT =  jwt.verify(token , process.env.JWT_SECRET)

    const user = await User.findById(verifyJWT.id)

    if(!user){
        return res.status(404).json({
            success :  false,
            message : "USER NOT FOUND :("
        })
    }

    req.user = user ;

    if(user.isUserBanned){
       return res.status(403).json({
        success : false ,
        message : "YOUR ACCOUNT HAS BEEN BANNED"
       })
    }


    next()
}catch(err){
    return res.status(401).json({
        message : "Invalid Token",
        success : false ,
    })
}

}



module.exports = authMiddleware;