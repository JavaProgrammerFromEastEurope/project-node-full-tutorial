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
	if(!iser })
}
