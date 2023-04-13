const User = require('../model/User');

const getAllUsers = async (req, res) => {
	const users = await User.find();
	if(!users) return res.status
}