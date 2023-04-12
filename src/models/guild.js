const mongoose = require("mongoose");

const guildSchema = new mongoose.Schema({
    guildID: String,
    prefix: String,
    sanctions: Number,
});

module.exports = mongoose.model("Guild", guildSchema);
