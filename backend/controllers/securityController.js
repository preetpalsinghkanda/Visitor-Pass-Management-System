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

        if (visit.status === "approved") {
            visit.status = "checked-in"
            await visit.save()


            return res.status(200).json({
                message: "VISITOR CHECKED IN SUCCESSFULLY",
                visit,
            })

        }

        //VISITOR LEAVING.......

        if (visit.status === "checked-in") {
            visit.status = "completed"
            await visit.save()


            return res.status(200).json({
                message: "VISITOR CHECKED OUT SUCCESSFULLY",
                visit,
            })
        }


        //INVALID HANDLE
        if (visit.status === "completed") {
            return res.status(400).json({
                message: "VISIT ALREADY COMPLETED OR INVALID  :("
            })
        }


        //ANY OTHER STATUS

        return res.status(400).json({
            message: `VISITOR'S VISIT IS ${visit.status}`
        })


    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        })

    }
}



module.exports = { checkVisitorQR, }