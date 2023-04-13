const { logEvents } = require('./logEvents');

const errorHandler = (err, req, res, next) => {
	ligEvents(`${err.name}: ${err.message}`, 'errLog')
}