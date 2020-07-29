const mongoose = require('mongoose');

const businessSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        min: 6,
        max: 255
    },
    adress: {
        type: String,
        require: true,
        min: 6,
        max: 255
    },
    phone: {
        type: Number,
        require: true,
    },
    email: {
        type: String,
        require: true,
        max: 255,
        min: 6
    },
    date: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Business', businessSchema);