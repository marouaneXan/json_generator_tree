const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: true,
    },
    lName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: Boolean,
        required: true,
    },
}, { timestapms: true });
module.exports = mongoose.model('User', userSchema);