const usersDB = {
	users: require('../models/users.json'),
	setUsers: function: function (data) {this.users = data}
}
const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt')

const handleNewUser = async (req, res) => {
	const {usern pwd}
}