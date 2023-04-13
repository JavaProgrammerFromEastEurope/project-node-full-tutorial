const usersDB = {
	users: require('../model/users.json'),
	setUsers: function (data) { this.user = data }
}

const fsPromises = require('fs').promises