const Employee = require('../model/Employee');

const getAllEmployees = async (req, res) => {
	const employees = await Employee.find();
	if(!em)
}