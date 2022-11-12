// Import the mongoose package

const mongoose = require("mongoose");

// Create a Mongoose Schema

const listSchema = new mongoose.Schema(
    {
        title: {
                type: String,
                required: true
            },
        description: {
                type: String,
                required: true
            },
    },
        { timestamps: true }
    );

// Create a Mongoose Model from Schema

const list = mongoose.model('list', listSchema);

// Export Model

module.exports = list;