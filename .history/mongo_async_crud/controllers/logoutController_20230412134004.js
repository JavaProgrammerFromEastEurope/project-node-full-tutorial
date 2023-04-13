const User = require('../model/User');

const handleLogout = async (req, res) => {
	// On client/ also delete thr accessToken

	const cookies = req.cookies;
	if(!cookies?.jwt) return res.sendStatus(204); // No content
	const refreshToken = cookies.jwt
}