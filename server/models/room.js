const mongoose = require('mongoose')

const roomSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        category: { type: Number, required: true },
        capacity: { type: Number, required: true },
        size: { type: Number, required: true },
        price: { type: Number, required: true },
        img: { type: String, required: true },
        type: { type: String, required: true },
        ac: { type: Boolean, required: true },
        dining: { type: Boolean, required: true },
        washroom: { type: Boolean, required: true },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('rooms', roomSchema)

