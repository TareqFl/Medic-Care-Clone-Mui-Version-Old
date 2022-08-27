const Appointments = require("../models");


exports.fetchAllData = async (req, res) => {
    try {
        const response = await Appointments.find()
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

exports.postData = async (req, res) => {
    const data = req.body

    console.log(data)

    try {
        const response = await Appointments.findOne({ name: data.name })
        if (!response) {
            const newAppointment = new Appointments(data)
            newAppointment.save(err => {
                if (!err) {
                    res.status(200).json(newAppointment)
                }
            })

        } else if (response) {
            res.status(200).json(response)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}