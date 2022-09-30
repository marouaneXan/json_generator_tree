const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
}, { timestapms: true });
module.exports = mongoose.model('Data', dataSchema);