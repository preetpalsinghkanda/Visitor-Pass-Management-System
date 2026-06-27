const User = require("../models/User");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const registerUser = async (req, res) => {


    try {
        const { name, email, password , phone } = req.body;


        if (!name || !email || !password || !phone) {
            return res.status(400).json({
                success: false,
                message: "ALL INPUTS ARE MANDATORY!"
            })
        }
        //user check
        const existUser = await User.findOne({
            email,
        })

        if (existUser) {
            return res.status(400).json({
                success: false,
                message: "user already have an account",
            })
        }

        const hashedPass = await bcrypt.hash(password, 10)

        // user create
        const user = await User.create({

            name,
            email,
            phone ,
            password: hashedPass,

        })

        res.status(201).json({
            success: true,
            user,
        })


    } catch (err) {
        res.status(500).json({
            message: err.message,
            success: false,
        })

    }
}


const loginUser = async (req, res) => {

    try {


        const { email, password } = req.body;

        // inputs check
        if (!email || !password) {

            return res.status(400).json({
                success: false,
                message: "EMAIL AND PASSWORD BOTH ARE MANDATORY!"
            })

        }

        // login user check
        const user = await User.findOne({ email })

        if (!user) {

            return res.status(400).json({
                success: false,
                message: "Please enter valid Email & Password"
            })
        }

        //pass check
        const isPassMatch = await bcrypt.compare(password, user.password)

        if (!isPassMatch) {
            return res.status(400).json({
                message: "Please enter valid Email & Password",
                success: false,
            })
        }

        // jwt 

        const token = jwt.sign(
            {
                id: user._id,
                role: user.role,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d",
            }
        )


        res.cookie("token" , token,{
            maxAge : 24*60*60*1000
        })




        res.status(200).json({
            success: true,
            message: "Login Sucessful (Welcome Back)"
        });

    } catch (err) {

        res.status(500).json({
            message: err.message,
            success: false,
        })
    }
}


const logoutUser = async (req , res) => {

    try {
        res.clearCookie("token");

        return res.status(200).json({
            message : "LOGOUT SUCCESS",
            success : true ,
        })
    }catch(err){

        return res.status(500).json({
            message : err.message,
            success : false ,
        })
    }

}


module.exports = { registerUser, loginUser , logoutUser}