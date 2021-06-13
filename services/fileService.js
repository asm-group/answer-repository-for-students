let fileModel = require('../models/fileModel');

function getByUrl(url, callback) {
    fileModel.findOne({ url: url }, (err, message) => {
        if (err) {
            callback(err, null);
        }
        else {
            callback(null, message);
        }
    });
}

module.exports = {
    getByUrl
};
