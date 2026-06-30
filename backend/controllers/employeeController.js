const Visit = require("../models/Visit")

const getEmployeePendingVisits = async (req, res) => {
    try {

        const visits = await Visit.find({
            host: req.user.id,
            status: "pending",
        })

            .populate("visitor", "name email phone photo")
            .sort({ createdAt: -1 })

        return res.status(200).json({
            success: true,
            visits
        })


    } catch (err) {


        return res.status(500).json({
            success: false,
            message: err.message
        })

    }
}

const getAllEmployeeVisits = async (req, res) => {
    try {

        const visits = await Visit.find({
            host: req.user.id,
        })

            .populate("visitor", "name email phone photo")
            .sort({ createdAt: -1 })


        return res.status(200).json({
            success: true,
            visits,
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })

    }
}

const approveVisit = async (req, res) => {

    try {

        const visit = await Visit.findOne({
            _id: req.params.id,
            host: req.user.id,
        })

        if (!visit) {
            return res.status(404).json({
                success: false,
                message: "VISIT NOT FOUND :("
            })
        }

        visit.status = "approved"

        await visit.save()

        res.status(200).json({
            success: true,
            message: "VISIT APPROVED",
            visit
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        })
    }

}


const rejectVisit = async (req, res) => {

    try {

        const visit = await Visit.findOne({
            _id: req.params.id,
            host: req.user.id,
        })
        if (!visit) {
            return res.status(403).json({
                success: false,
                message: "VISIT NOT FOUND :("
            })
        }

        visit.status = "rejected"
        await visit.save()

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })

    }

}

const getEmployeeRequests = async (req, res) => {
    try {

        const total = await Visit.countDocuments({
            host: req.user.id,
        })

        const pending = await Visit.countDocuments({
            host: req.user.id,
            status: "pending",
        })

        const approved = await Visit.countDocuments({
            host: req.user.id,
            status: "approved"
        })

        const rejected = await Visit.countDocuments({
            host: req.user.id,
            status: "rejected"
        })

        // const completed = await Visit.countDocuments({
        //     host : req.user.id,
        //     status : "completed"
        // })

        res.json({
            total,
            approved,
            rejected,
            pending,
        })



    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message,
        })

    }
}


module.exports = { getEmployeePendingVisits, getEmployeeRequests, getAllEmployeeVisits, approveVisit, rejectVisit }