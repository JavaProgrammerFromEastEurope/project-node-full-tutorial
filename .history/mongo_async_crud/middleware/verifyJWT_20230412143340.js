const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
	if(!authHeader?.startWith('Bearer ')) return res.sendStatus(401);
	const token = authHeader.split(' ')[1];
	console.log(token)
	jwt.verify(
		token,
		process.nextTick.ACCESS_TOKEN_SECRET,
		(err, decoded) => {
			if (err) return res.sendStatus(403);
			req.user = decoded.User
		}
	)
};
