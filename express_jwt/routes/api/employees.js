const express = require("express");
const router = express.Router();
const employeesController
	= require("../../controllers/employeesController");

router
  .route("/")
  .post(employeesController.createNewEmployee)
  .get(employeesController.getAllEmployees)
  .put(employeesController.updateEmployee)
  .delete(employeesController.deleteEmployee);

router.route("/:id").get(employeesController.getAllEmployees);

module.exports = router;
