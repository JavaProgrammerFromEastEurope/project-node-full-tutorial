const User = require('../model/User');
const bcrypt = require('bcrypt')

const handleNewUser = async (req, res) => {
	const {user, pwd } = req.body;
	if (!user || pwd) retu res,status
