const express = require('express')
const router = express.Router()
const employeesController - require('../../controllers/employeeesControler')

router.route('/')
	.get(employeesController.getAllE)