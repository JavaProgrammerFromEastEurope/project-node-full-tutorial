const express = require('express')
const router = express.Router()
const employeesController - require('../../controllers/employeesControler')

router.route('/')
	.get(employeesController.get)