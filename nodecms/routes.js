var express = require('express');
var router = express.Router();
var controllers = require('./controllers');
var config = require('./config');

/*
 * UI part
 */
router.get('/', controllers.Page.home);
router.get('/login', controllers.User.login);
router.post('/login', controllers.User.dologin);
router.get('/register', controllers.User.register);
router.post('/register', controllers.User.doregister);

router.get('/logout', controllers.User.logout);

module.exports = router;