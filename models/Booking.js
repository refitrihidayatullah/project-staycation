const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const bookingSchema = new mongoose.Schema({
    bookingStartDate: {
        type: Date,
        required: true
    },
    bookingEndDate: {
        type: Date,
        required: true
    },
    itemId: [{

        _id: {
            type: ObjectId,
            ref: 'Item',
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        night: {
            type: Number,
            required: true
        }
    }],
    memberId: [{
        _id: {
            type: ObjectId,
            ref: 'Member'
        }
    }],
    bankId: [{
        _id: {
            type: ObjectId,
            ref: 'Bank'
        }
    }],
    proofPayment: {
        type: String,
        required: true
    },
    bankFrom: {
        type: String,
        required: true
    },
    accountHolder: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;