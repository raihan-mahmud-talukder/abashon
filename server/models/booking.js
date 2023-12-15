const mongoose = require('mongoose')

const bookingSchema = mongoose.Schema({
    room: { type: String, required: true },
    roomId: { type: String, required: true },
    user: { type: String, required: true },
    userId: { type: String, required: true },
    status: { type: String, required: true, default: 'booked' }
}, { timestamps: true })

module.exports = mongoose.model('bookings', bookingSchema)
