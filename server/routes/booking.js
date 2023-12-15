const express = require('express')
const router = express.Router()
const Booking = require('../models/booking')
const Room = require('../models/room')

router.post('/bookroom', async (req, res) => {
    const { room, user } = req.body
    try {
        const newBooking = new Booking(
            { room: room.name, 
                roomId: room._id,
                user: user.name,
                userId: user._id })
        const booking = await newBooking.save()
        const temp = await Room.findOne({ _id: room._id })
        temp.availability = false
        await temp.save()
        res.send('Room is booked')
    } catch (error) { console.log(error) }
})

module.exports = router