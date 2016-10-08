var mongoose = require('mongoose');
var config = require('../config');

mongoose.connect(config.db, {'server': {'poolSize': 100}}, function (err) {
    if (err) {
        console.error('failed to connect to %s, error is ', config.db, err.message);
        process.exit(1);
    }
});

require('./user');

exports.User = mongoose.model('User');


exports.getModel = function (name, options) {
    options = options || {};

    if (options.language) {
        var names = mongoose.modelNames();
        for (var i = 0; i < names.length; ++i) {
            if (names[i] === options.language + '_' + name) {
                name = options.language + '_' + name;
                break;
            }
        }
    }

    return mongoose.model(name);
};
