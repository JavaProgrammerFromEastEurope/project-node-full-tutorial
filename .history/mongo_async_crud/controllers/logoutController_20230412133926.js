const User = require('../model/User');

const handleLogout = async (req, res) => {
	// On client/ also delete thr accessToken

	const cookies = req.cookies;
	if(!cookies)
}