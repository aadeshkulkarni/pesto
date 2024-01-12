const mongoose = require('mongoose')
require("dotenv").config();
mongoose.connect(process.env.MONGODB_URL)

const Task = mongoose.model("Tasks",{
    title: String,
    description: String,
    status: String
})


module.exports = { Task }