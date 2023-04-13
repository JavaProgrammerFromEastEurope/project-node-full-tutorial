const {logEvents} = require('./logEvents');

const errorHandler = (err. req, res, next) => {
	logEvents(`err.`)
}