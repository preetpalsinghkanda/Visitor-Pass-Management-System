const User = require("../models/User");
const bcrypt = require("bcrypt")

const getAllUsers = async (req, res) => {

    try {

        const users = await User.find()
        return res.status(200).json({
            success: true,
            users,
        })

    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false,
        })
    }

}

const getSingleUser = async (req, res) => {
    try {

        const id = req.params.id

        const user = await User.findById(id)

        return res.status(200).json({
            success: true,
            user,
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        })

    }
}


const createUser = async (req, res) => {
    try {

        const { name, email, password, role } = req.body;

        if (!name || !email || !password || !role) {
            return res.status(400).json({
                message: "ALL INPUTS ARE REQUIRED TO CREATE A USER",
                success: false,
            })
        }


        const alreadyExistingUser = await User.findOne({ email });

        if (alreadyExistingUser) {
            return res.status(400).json({
                success: false,
                message: "USER ALREADY EXISTS IN DATABASE"
            })
        }

        const hashedPass = await bcrypt.hash(password, 10)


        const user = await User.create({
            name, email, password: hashedPass, role,
        })


        return res.status(201).json({
            success: true,
            message: "USER CREATED",
            user,
        })







    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false,
        })
    }
}

const updateUser = async (req, res) => {
    try {

        const { name, email, role } = req.body
        const id = req.params.id

        const user = await User.findById(id)

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "USER DOESN'T EXIST"
            })
        }

        user.name = name
        user.role = role
        user.email = email

        await user.save()


        return res.status(200).json({
            success: true,
            message: "USER UPDATED SUCCESSFULLY"
        })



    } catch (err) {
        return res.status(400).json({
            message: err.message,
            success: false,
        })
    }
}

const deleteUser = async (req, res) => {
    try {

        const id = req.params.id

        const user = await User.findById(id)

        if (!user) {
            return res.status(404).json({
                message: "USER NOT FOUND IN DB",
                success: false,
            })
        }

        await user.deleteOne()

        return res.status(200).json({
            success: true,
            message: "USER DELETED SUCCESSFULLY "
        })

    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

const banUser = async (req, res) => {

    try {
        const id = req.params.id
        const user = await User.findById(id)

        if (!user) {
            return res.status(403).json({
                message: "USER NOT FOUND IN DB",
                success: false,
            })
        }

        user.isUserBanned = true

        await user.save()


        return res.status(200).json({
            success: true,
            message: "USER BANNED"
        })


    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

const unbanUser = async (req, res) => {
    try {

        const id = req.params.id

        const user = await User.findById(id)

        if (!user) {
            return res.status(403).json({
                message: "USER NOT FOUND IN DB",
                success: false
            })
        }

        user.isUserBanned = false

        await user.save()

        return res.status(200).json({
            message: "USER UNBANNED",
            success: true
        })


    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false,
        })
    }
}


module.exports = { getAllUsers, getSingleUser, createUser, updateUser, deleteUser, banUser, unbanUser };