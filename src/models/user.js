const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userID: String,
    blacklisted: Boolean,
    dev: Boolean,
});

module.exports = mongoose.model("User", userSchema);