const express = require('express')
const router = express.Router()
const data = {};
data.employees = require('../../data/employees.json');

router.route('/')
	.get