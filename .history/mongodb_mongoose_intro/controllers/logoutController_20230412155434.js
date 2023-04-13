const usersDB = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  }
};
const fsPromises = require("fs").promises;
const path = require("path");

const handleLogout = async (req, res) => {
  // On client, also delete the accessToken

  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); // No content
	const refreshToken = cookies.jwt;

	//Is refreshToken in db?
	const foundUser = userDB.users.find(person => person.refreshToken === refreshToken);
	if(!foundUser) {
		res.clearCookie('jwt', { hhtpOnly})
	}
};
