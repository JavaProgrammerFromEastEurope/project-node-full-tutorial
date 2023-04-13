const usersDB = {
  users: require('../model/users.json'),
  setUsers: function (data) {
    this.users = data
  },
}
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const fsPromises = require('fs').promises
const path = require('path')

const handleLogin = async (req, res) => {
	const {user, pwd}
}