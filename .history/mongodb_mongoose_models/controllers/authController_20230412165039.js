const userDB = {
  users: require("../model/users.json"),
	setUsers: function (data) { this.users = data}
};
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const fsPromises = require('fs').promises;
const path = require('path');

const handleLogin = async (req, res) => {
	const { user, pwd } = req.body;
	if(!user | !pwd) return res.status(400)
		.json({ message: `Username and password are required`});
	const foundUser = userDB.users.find(person => person.username === user);
	if(!foundUser) return res.sendStatus(401); // Unauthorized
}
