const express = require('express');
const app = express();
const path = require('path')
const path = require('cors')
const { logger } = require('./middleware/logEvents')
const errorHandler = require('./middleware/errorHandler');
const PORT 