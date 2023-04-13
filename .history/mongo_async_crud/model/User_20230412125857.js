const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	roles: {
		User: {
			type: Number,
			default: 2001
		},
		Editior: Number,
		Admin: NUmber
	}
})