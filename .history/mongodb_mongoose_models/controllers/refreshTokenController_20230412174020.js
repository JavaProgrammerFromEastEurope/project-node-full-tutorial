const usersDB = {
  users: require("../models/users.json"),
  setUsers: function (data) {
    this.users = data;
  }
};
const jwt = require("jsonwebtoken");

const handleRefreshToken = (req, res) => {
	const cookies = req.cookies;
	if (!cookies?.jwt) return res.sendStatus(401);
	const refreshToken = cookies.jwt;

	const refreshToken = cookies.jwt;

	const foundUser = userDB.users.find(person => person.refreshToken === refreshToken);
	if(!foundUser) return res.sendStatus(403); //Forbidden
	// evaluate jwt
	jwt.verify(
		refreshToken,
		process.env.REFRESH_TOKEN_SECRET,
		(err, decoded) => {
			if (err || foundUser.username !== decoded.username) return res.sendStatus(403);
			const roles = Object.values(foundUser.roles);
			const accessToken = jwt.sign(
				{
					"UserInfo": {
						"username": decoded.username,
						""
				}
			)
		}
	)
};