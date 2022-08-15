const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const activitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    isPopuler: {
        type: Boolean
    },
    itemId: {
        type: ObjectId,
        ref: Item
    }
})
const Activity = mongoose.model('Activity', activitySchema);
module.exports = Activity;