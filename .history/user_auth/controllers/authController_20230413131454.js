const userDB = {
  users: require('../model/users.json'),
  setUsers: function (data) {
    this.users = data
  },
}

const bcrypt = require('bcrypt')

const handle
