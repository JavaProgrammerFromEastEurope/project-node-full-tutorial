const Employee = require("../model/Employee");

const getAllEmployees = async (req, res) => {
  const employees = await Employee.find();
  if (!employees)
    return res.status(204).json({ message: "No employees found." });
};

const createNewEmployee = async(req, res) => {
	if(!res?.body?.firstname || !req?.body?.lastname) {
		return res.statis
	}
}