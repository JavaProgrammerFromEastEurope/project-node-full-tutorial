const allowedOrigins = require('./allowedOrigins');

const corsOptions = {
	origin: (origin, callback) => {
		if (allowedOrigins.indexOf(origin) !== -1 || !origin) 
	}
}