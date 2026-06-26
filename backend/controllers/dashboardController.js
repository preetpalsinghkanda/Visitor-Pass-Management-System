const express = require("express")


const accessDashboard = async (req, res) => {
    try {

        const user = req.user

        return res.status(200).json({
            success: true,
            user,
        })



    } catch (err) {

        return res.status(500).json({
            message: err.message,


        })
    }
}



module.exports = { accessDashboard }