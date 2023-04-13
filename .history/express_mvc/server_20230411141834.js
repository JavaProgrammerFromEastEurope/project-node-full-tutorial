const express = require('express')
const app = express();
const path = require('path')
const cors - require('cors')
const corsOptions = require('./config/corsOptions')
const {logger} = require('./middleware/logEvents')
const errorHandler = require('./middleware/errorHandler');
const PORT = process.env.PORT || 3500;

// custom middleware logger
app.use(logger);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

//built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

//built-in middleware for json
app.use(express.json());

//serve static files
app.use('/', express.static(path.join(__dirname, '/public')))