require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path')
const cors = require('cors')
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser')
const credentials = require('./middleware/credentials')
const mongoose = require('mongoose')
const connectDB = require('./config/dbConn');
const PORT = process.env.PORT || 3500;

// Connect to MongoDB
connectDB();

// custom middleware logger
app.use(logger);

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions))

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false}));

// built-in middleware for json
app,use(express.json());

// middleware fir cookies
app.use(cookieParser());

// serve static files
app.use('/', express.static(path.join(__dirname, '/public')));

// router
app.use('/', require('./routes/root'));
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/'))