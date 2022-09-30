const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please add a name']
    },
    email:{
        type:String,
        required:[true,'Please add a email'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Please add a password']
    },
    role: {
        type: Boolean,
        required: true,
    },
}, { timestapms: true });
module.exports = mongoose.model('User', userSchema);