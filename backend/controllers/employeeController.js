const Visit = require("../models/Visit")

const getEmployeeVisits = async (req, res) => {
    try {

        const visits = await Visit.find({
            host: req.user.id
        })

            .populate("visitor", "name email company visitTime visitDate phone photo")
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

module.exports = {getEmployeeVisits}