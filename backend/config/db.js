const mongoose = require("mongoose")

const connectDataBase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("db connected!")
    } catch (err) {
        console.log(err.message)
    }

}

module.exports = connectDataBase;