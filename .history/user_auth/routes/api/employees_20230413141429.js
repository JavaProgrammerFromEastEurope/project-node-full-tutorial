const express = require('express')
const router = express.Router()
const employeesController - require('../../controllers/')

router.route('/')
	.get(employeesController.get)