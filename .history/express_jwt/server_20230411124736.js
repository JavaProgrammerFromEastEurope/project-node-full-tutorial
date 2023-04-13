const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");
const verifyJWT = require("./middleware/verifyJWT");
const credentials = require("./middleware/credentials");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3500;

// custom middleware logger
app.use(logger);

//handle options credentials check - before CORS!
//and fetch cookies credentials requirement
app.use(cors(credentials));

// Cross Origin Resource Sharing
app.use(cors)