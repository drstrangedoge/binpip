module.exports = function (app) {
	console.log('Routes - Start');
	var controllers = require('./controllers');

	app.get('/', controllers.index);

	app.get('/ping', controllers.ping);

	console.log('Routes - End');
}
