const mongoose = require('mongoose');

const bankSchema = new mongoose.Schema({
    nameBank: {
        type: String,
        required: true
    },
    nomorRekening: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
})
const Bank = mongoose.model('Bank', bankSchema);
module.exports = Bank;