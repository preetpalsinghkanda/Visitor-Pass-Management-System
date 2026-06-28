const Visit = require("../models/Visit")



const createVisit = async (req, res) => {

    try {

        const { host, company, visitDate, visitTime, purpose } = req.body

        if (!host || !visitDate || !visitTime || !purpose) {
            return res.status(400).json({
                success: false,
                message: "ALL INPUTS ARE REQUIRED :("
            })
        }
        const visit = await Visit.create({
            visitor: req.user.id,
            host,
            company,
            visitDate,
            visitTime,
            purpose,

        })

        return res.status(200).json({
            success: true,
            message: "VISIT REQUEST CREATED SUCCESSFULLY",
            visit,
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })

    }

}

module.exports = { createVisit }