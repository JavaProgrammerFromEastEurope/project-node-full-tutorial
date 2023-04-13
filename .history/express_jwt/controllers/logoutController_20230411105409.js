const userDB = {
  users: require('../model/users.json'),
  setUsers: function (data) {
    this.users = data
  },
}
const fsPromises = require('fs').promises
const path = require('path')

const handleLogout = async (req, res) => {
  const cookies = req.cookies
  if (!cookies?.jwt) return res.sendStatus(204)
  const refreshToken = cookies.jwt

	//Id refreshToken in db?
	const foundUser = userDB.users.find(person => person.refreshToken === refreshToken);

	if(!foundUser) {
		res.clearCookie('jwt, {httpOnly: true, sameSite: 'None', secure}')
	}
}
