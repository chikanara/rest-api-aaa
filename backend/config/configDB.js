const mongoose = require("mongoose")

const configDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/aaa');
        console.log("DB connected")
    } catch (error) {
        console.error(error)
    }
    // then().catch()
}
module.exports = configDB