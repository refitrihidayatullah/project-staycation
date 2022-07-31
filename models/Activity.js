const mongoose = require('mongoose');

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
    }
})
const Activity = mongoose.model('Activity', activitySchema);
module.exports = Activity;