const express = require('express')
const app = express();
const path = require('path')
const cors - require('cors')
const corsOptions = require('./config/corsOptions')
const {logger} = require('./middleware/logEvents')
const errorHandler = require('./middleware/errorHandler');
const PORT = process.env.PORT "" 3500;