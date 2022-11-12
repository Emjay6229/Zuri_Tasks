const mongoose = require("mongoose");

// Create connection string

const MONGODB_URI = "mongodb://localhost/todo_app";

// Create database connection function

async function connect(){
    try {
       await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("connected to database...")
    } catch (err) {
        console.log(err.message)
    }
}

// Export connection function

module.exports = connect;