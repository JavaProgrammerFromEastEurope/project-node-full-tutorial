const usersDB = {
	users: require('../model/users.json'),
	setUsers: function (data) { this.users = data }
}
const fsPromises = require('fs').promises;
const path = require('path');

const handleLogout = async (req, res) => {
	// On client, also delete the accessToken

	const cookies = req.cookies;
	if(!cookies?.jwt) return res.sendStatis
}