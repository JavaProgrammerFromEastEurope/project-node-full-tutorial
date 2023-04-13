const userDB = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  }
};
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fsPromises = require("fs").promises;
const path = require("path");

const handleLogin = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user | !pwd)
    return res
      .status(400)
      .json({ message: `Username and password are required` });
  const foundUser = userDB.users.find((person) => person.username === user);
  if (!foundUser) return res.sendStatus(401); // Unauthorized
  // evaluate password
  const match = await bcrypt.compare(pwd, foundUser.password);
  if (match) {
    const roles = Object.values(foundUser.roles);
    // create JWT's
    const accessToken = jwt.sign(
      {
        UserInfo: {
          username: foundUser.username,
          roles: roles
        }
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "30s" }
    );
    const refreshToken = jwt.sign(
      { username: foundUser.username },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
		// Saving refreshToken with current user
		const otherUsers = users
  }
};
