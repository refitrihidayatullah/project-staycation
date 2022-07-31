const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumer: {
        type: String,
        required: true
    }
})
const Member = mongoose.model('Member', memberSchema);
module.exports = Member;