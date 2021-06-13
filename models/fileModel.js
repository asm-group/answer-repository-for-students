let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let FileSchema = new Schema({
    url: String,
});

let File = mongoose.model('message', FileSchema);

module.exports = File;
