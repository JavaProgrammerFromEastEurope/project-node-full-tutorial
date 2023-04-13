const { logEvents } = require('./logEvents');

const errorHandler = (err, req, res, next) => {
	ligEvents(`${err.name}: ${err.message}`, 'errLog.txt');
	console.error(err.stack)
	res.status(400)
}