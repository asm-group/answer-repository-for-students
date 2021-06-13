let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let UserSchema = new Schema({
    telegramId: String,
    fistName: String,
    lastName: String,
    role: String
});

let User = mongoose.model('user', UserSchema);

module.exports = User;
