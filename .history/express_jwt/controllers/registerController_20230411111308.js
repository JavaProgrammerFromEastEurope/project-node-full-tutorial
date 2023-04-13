const usersDB = {
	users: require('../models/users.json'),
	setUsers: function: function (data) {this.users = data}
}
const fsPromises = require('fs').promises