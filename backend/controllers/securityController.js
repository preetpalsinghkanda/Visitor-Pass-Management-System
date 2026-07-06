const Visit = require("../models/Visit")


const checkVisitorQR = async (req, res) => {
    try {

        const { qrCode } = req.body

        if (!qrCode) {
            return res.status(400).json({
                success: false,
                message: "QR CODE ?"
            })
        }

        const visit = await Visit.findOne({ qrCode })
            .populate("visitor", "name email phone photo")
            .populate("host", "name")

        if (!visit) {
            return res.status(404).json({
                success: false,
                message: "INVALID QR CODE"
            })
        }

        //VISITOR ENTERING....

        // if (visit.status === "approved") {
        //     visit.status = "checked-in"
        //     await visit.save()


        //     return res.status(200).json({
        //         message: "VISITOR CHECKED IN SUCCESSFULLY",
        //         visit,
        //     })

        // }

        //VISITOR LEAVING.......

        // if (visit.status === "checked-in") {
        //     visit.status = "completed"
        //     await visit.save()


        //     return res.status(200).json({
        //         message: "VISITOR CHECKED OUT SUCCESSFULLY",
        //         visit,
        //     })
        // }


        //INVALID HANDLE
        if (visit.status === "completed") {
            return res.status(400).json({
                success: false,
                message: "VISIT ALREADY COMPLETED OR INVALID  :("
            })
        }

        if (visit.status === "rejected") {
            return res.status(400).json({
                success: false,
                message: "VISIT REJECTED"
            })
        }


        //ANY OTHER STATUS

        // return res.status(400).json({
        //     message: `VISITOR'S VISIT IS ${visit.status}`
        // })

        return res.status(200).json({
            success: true,
            visit,
        })



    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        })

    }
}

const checkInVisitor = async (req, res) => {
    try {
        const visit = await Visit.findById(req.params.id)

        if (!visit) {
            return res.status(400).json({
                message: "VISIT NOT FOUND",
                success: false,
            })
        }

        if (visit.status !== "approved") {
            return res.status(400).json({
                message: "VISIT PASS IS NOT VALID"
            })
        }

        visit.status = "checked-in"

        await visit.save()

        res.status(200).json({
            success: true,
            message: "VISITOR CHECKED IN",
            visit
        })

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        })

    }
}

const checkOutVisitor = async (req, res) => {
    try {

        const visit = await Visit.findById(req.params.id)

        if (!visit) {
            return res.status(404).json({
                message: "VISIT NOT FOUND"
            })
        }

        if (visit.status !== "checked-in") {
            return res.status(400).json({
                success: false,
                message: "VISITOR IS NOT INSIDE"
            })
        }

        visit.status = "completed"
        await visit.save()

        res.status(200).json({
            success: true,
            message: "VISITOR CHECKED OUT"
        })


    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}


const rejectEntry = async (req, res) => {
    try {

        const visit = await Visit.findById(req.params.id)

        if (!visit) {
            return res.status(404).json({
                success: false,
                message: "VISIT NOT FOUND"
            })
        }

        visit.status = "rejected"
        await visit.save()


        res.status(200).json({
            message: "ENTRY REJECTED:(",
            success: true
        })

    } catch (err) {

        return res.status(500).json({
            message: err.message,
            success: false,
        })
    }
}


module.exports = { checkVisitorQR, checkInVisitor, checkOutVisitor, rejectEntry }