const jwt = require('jsonwebtoken')
require('dotenv').config();

const verifyJWT = (req, res, next) => {
	const authHeader = req.headers['authorization'];
	if(!authHeader) return res.sendStatus(401);
	console.log(authHeader); //Bearer token
	const token = authheader.split(' ')
}