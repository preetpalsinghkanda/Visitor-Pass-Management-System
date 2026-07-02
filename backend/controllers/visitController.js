const Visit = require("../models/Visit")
const QRCode = require("qrcode")
const crypto = require("crypto")




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

const getMyVisits = async (req, res) => {
    try {
        const myVisits = await Visit.find({
            visitor: req.user.id,
        })

            .populate("host", "name email")
            .sort({ createdAt: -1 })


        return res.status(200).json({
            success: true,
            visits: myVisits,
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

const getVisitPass = async (req, res) => {
    try {

        const visit = await Visit.findOne({
            _id: req.params.id,
            visitor: req.user.id,
            status: {
                $in: ["approved", "checked-in"],
            },
        }).populate("host", "name")


        if (!visit) {
            return res.status(404).json({
                message: "NO PASS OR PASS INVALID",
                success: false,
            })
        }

        res.status(200).json({
            success: true,
            visit,
        })

    } catch (err) {
        res.status(500).json({
            message: err.message,
            success: false,
        })

    }
}

module.exports = { createVisit, getMyVisits, getVisitPass }