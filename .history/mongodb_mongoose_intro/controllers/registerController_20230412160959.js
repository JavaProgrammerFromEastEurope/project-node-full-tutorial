const usersDB = {
	users: require('../middleware/users.json'),
	setUsers: function (data) {this.users = data }
}
const fsPromises = require('fs').promises;
const path = require('path')
const bcrypt = require('bcrypt')

const handleNewUser = async (req, res) => {
	const {user, pwd} = req.body;
	if()
}