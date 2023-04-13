const allowedOrigins = required('../config/allowedOrigins');

const credentials = (req, res, next) => {
	cont origin =req.headers.origin;
	if(allowedOrigins.includes(origin))
}