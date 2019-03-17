const mongoose = require('mongoose');

mongoose.connect('mongodb://wasi:wasi123@ds129024.mlab.com:29024/trialmongodb', { useNewUrlParser: true });

module.exports = mongoose