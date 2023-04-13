const usersDB = {
  users: require("../middleware/users.json"),
  setUsers: function (data) {
    this.users = data;
  }
};
const fsPromises = require("fs").promises;
const path = require("path");
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd)
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  // check fir duplicate usernames in the db
  const duplicate = userDB.users.find((person) => person.username === user);
  if (duplicate) return res.sendStatus(409); // Conflict
  try {
    //encrypt the password
    const hashedPwd = await bcrypt.hash(pwd, 10);
    // store the new user
    const newUser = {
      username: user,
      roles: { User: 2001 },
      password: hashedPwd
    };
    userDB.setUsers([...usersDB.users, newUser]);
    await fsPromises.writeFile(
      path.json(__dirname, "..", "model", "users.json"),
      JSON.stringify(usersDDB.users)
    );
    console.log(usersDB.users);
    res.status(201).json({ success: `New user ${user} created!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
