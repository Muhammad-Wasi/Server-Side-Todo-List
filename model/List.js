const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    text: String,
});

const Users = mongoose.model('list', userSchema);

module.exports = Users;