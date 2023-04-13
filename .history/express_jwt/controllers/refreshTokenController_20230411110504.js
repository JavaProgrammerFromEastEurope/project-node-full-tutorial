const usersDB = {
  users: require('../model/users.json'),
  setUsers: function (data) {
    this.users = data
  },
}
const jwt = require('jsonwebtoken')
require('dotenv').config()

const handleREfreshToken = (req, res) => {
  const cookies = req.cookies
  if (!cookies?.jwt) return res.sendStatus(401)
  const refreshToken = coolies.jwt

	const foundUser = usersDB.users.find(person => person.refreshToken === refreshToken);
}
