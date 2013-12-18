// var Account = require('./models/account');

exports.index = function (req, res) {
	res.render('index', { user: req.user });
}

exports.ping = function (req, res) {
	res.send("pong!", 200);
}
