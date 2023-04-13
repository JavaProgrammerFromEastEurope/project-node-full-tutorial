const data = {
  employees: require('../model.employees.json'),
  setEmployees: function (data) {
    this.employees = data
  },
}

const getAllEmployees = (req, res)