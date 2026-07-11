const User = require("../models/User");
const bcrypt = require("bcrypt")
const Visit = require("../models/Visit.js")

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

        const { name, email, password, role, phone } = req.body;

        if (!name || !email || !password || !role || !phone) {
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
            name, email, password: hashedPass, role, phone
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

        const { name, email, role, phone } = req.body
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
        user.phone = phone

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

const getAllVisits = async (req, res) => {

    try {
        const visits = await Visit.find()
            .populate("visitor", "name email phone photo")
            .populate("host", "name")
            .sort({ createdAt: -1 })


        return res.status(200).json({
            success: true,
            visits,
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        })
    }

}

const deleteVisit = async (req, res) => {
    try {
        const visit = await Visit.findById(req.params.id)

        if (!visit) {
            return res.status(400).json({
                success: false,
                message: "VISIT NOT FOUND"
            })
        }

        await visit.deleteOne()

        return res.status(200).json({
            success: true,
            message: "VISIT DELETED"
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}


const getTotal = async (req, res) => {
    try {

        //total visits 
        const totalVisits = await (Visit.countDocuments())

        //total visitors
        const totalVisitors = await User.countDocuments(
            {
                role: "visitor"
            }
        )

        //total employee

        const totalEmployees = await User.countDocuments({
            role: "employee"
        })

        //total security

        const totalSecurity = await User.countDocuments({
            role: "security"
        })


        res.status(200).json({
            success: true,
            total: {
                totalEmployees,
                totalSecurity,
                totalVisitors,
                totalVisits,
            }
        })




    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

module.exports = { getAllUsers, getTotal, deleteVisit, getAllVisits, getSingleUser, createUser, updateUser, deleteUser, banUser, unbanUser };