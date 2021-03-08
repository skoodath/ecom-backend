const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "It is a required field"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "It is a required field"],
    },
    emailid: {
        type: String,
        required: [true, "It is a required field"],
        index: true,
        unique: true
    }
});

module.exports = mongoose.model('user', userSchema);