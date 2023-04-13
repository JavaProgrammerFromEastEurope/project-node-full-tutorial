const express = require("express");
const router = express.Router();
const employeesController
	= require("../../controllers/employeesController");
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../')
router
  .route("/")
  .post(employeesController.createNewEmployee)
  .get(employeesController.getAllEmployees)
  .put(employeesController.updateEmployee)
  .delete(employeesController.deleteEmployee);

router.route("/:id").get(employeesController.getAllEmployees);

module.exports = router;
