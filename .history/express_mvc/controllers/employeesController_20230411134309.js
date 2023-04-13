const data = {
  employees: require("../model/employees.json"),
  setEmployees: function(data) {
    this.employees = data;
  }
};

const getAllEmployees = (req, res) => {
  res.json(data.employees);
};

const createNewEmployee = (req, res) => {
	const newEmployee = {
		id: data.employees?.length ? data.employees[data.employees.length - 1].id + 1 : 1,
		firstname: req.body.
	}
}