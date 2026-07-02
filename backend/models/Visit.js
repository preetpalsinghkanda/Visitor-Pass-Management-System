const mongoose = require("mongoose")


const visitSchema = new mongoose.Schema({

    visitor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    host: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,

    },
    company: {
        type: String,

    },
    visitDate: {
        type: Date,
        required: true,

    },
    visitTime: {
        type: String,
        required: true,

    },
    purpose: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: [
            "pending",
            "approved",
            "rejected",
            "completed",
            "checked-in",
            "checked-out"

        ],
        default: "pending"
    },
    qrCode: {
        type: String,
    },

    qrImage: {
        type: String,
    }

}, {
    timestamps: true,
}

)


module.exports = mongoose.model("Visit", visitSchema)