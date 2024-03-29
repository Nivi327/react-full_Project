const mongoose = require('mongoose');

const catergorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    parentId: {
        type: String
    }
}, {timestamps: true});

module.exports = mongoose.model('Category', catergorySchema);