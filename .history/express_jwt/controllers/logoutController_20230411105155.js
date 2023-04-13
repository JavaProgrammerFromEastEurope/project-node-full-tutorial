const userDB = {
  users: require('../model/users.json'),
	setUsers: function (data) {this.users = data }
}
const fsPromises = require('fs').promises;
const path = require('path');

const handleLogout = async (req, res) => {

	const cookies = req.cookies;
	if (!cookies?.jwt) return res.sendStatus(204);
	const refreshToken
}
