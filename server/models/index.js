const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    id: String,
    name: String,
    age: Number,
    phone: String,
    date: String
})

const Appointments = mongoose.model("appointment", appointmentSchema);


module.exports = Appointments;