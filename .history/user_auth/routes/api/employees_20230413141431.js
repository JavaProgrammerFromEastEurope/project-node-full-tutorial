const express = require('express')
const router = express.Router()
const employeesController - require('../../controllers/em')

router.route('/')
	.get(employeesController.get)