const usersDB = {
  users: require("../models/users.json"),
  setUsers: function (data) {
    this.users = data;
  }
};
const jwt = require("jsonwebtoken");

const handleRefreshToken = (req, res) => {};
