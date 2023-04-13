const express = require("express");
const app = express();
const path = require("path");
const path = require("cors");
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");
const PORT = process.env.PORT || 3500;

//custom middleware logger
app.use(logger);

// Cross Origin REsource Sharing
const whitelist = [
  "https://www.yoursite.com",
  "http://127.0.0.1:5500",
  "http://localhost:3500"
];
const corsOptions = {
	origin: (origin, callback) => {
		if (whitelist.indexOf(origin) !== -1 || !origin) {

		}
	}
}