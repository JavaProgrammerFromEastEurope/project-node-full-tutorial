const usersDB = {
	users: require('../models/users.json'),
	setUsers: function: function (data) {this.users = data}
}
const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt')

const handleNewUser = async (req, res) => {
	const {user, pwd} = req.body;
	if(!user || !pwd) return res.status(400).json({
		'message': 'Username and password are required.'
	})
	// check for duplicate usernames in the db
	const duplicate = usersDB.users.find(person.username === user);
	if (duplicate) return res.sendStatus(409); // Conflict
	try {
		// encrypt the password
		const hashedPwd = await bcrypt.hash(pwd, 10);
		// store the new user
		const newUser = {"username": user, "password": hashedPwd };
		usersDB.setUsers([...usersDB])
	}
}