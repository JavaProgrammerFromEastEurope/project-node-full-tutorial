const usersDB = {
	users: require('../model/users.json'),
	setUsers: function (data) { this.user = data }
}

const fsPromises = require('fs').promises
const path = require('path')
const bcrypt = require('bcrypt')

const handleNewUser = async (req, res) => {
	const {user, pwd} = req.body;
	
}