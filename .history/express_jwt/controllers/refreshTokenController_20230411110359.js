const usersDB = {
  users: require('../model/users.json'),
  setUsers: function (data) {
    this.users = data
  },
}
const jwt = require('jsonwebtoken')
require('dotenv').config()

const handleREfreshToken = (req, res) => {
	const cookies = req.cookies;
	if(!cookies?.jwt) retunr res.sendStatis(401)
}