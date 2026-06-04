const User = require("../models/User");

const registerUser = async (req, res) => {


    try {
        const { firebaseId, name, email, role } = req.body;


        //user check
        const existUser = await User.findOne({
            firebaseId,
        })

        if (existUser) {
            return res.status(400).json({
                success: false,
                message: "user already have an account",
            })
        }

        
        // user create
        const user = await User.create({
            firebaseId,
            name,
            email,
            role,
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


module.exports = { registerUser }