const usersDB = {
	users: require('../model/users.json'),
	setUsers: function (data) { this.users = data }
}

const jwt = require('jsonwebtoken');

const handleRefreshToken = (req, res) => {
	const cookies = req.cookies;
	if(!cookies?.jwt) return res.sendStatus(401);
	const refres
}