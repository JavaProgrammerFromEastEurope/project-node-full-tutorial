const http = require('http');
const path = require('path')
const fs = require('fs')
const fsPromises = require('fs').promises

const logEvents = require('./logEvents');
const EventEmitter = require('events')
class Emitter extends EventEmitter { };
// initialize object
const myEmitter = new Emitter();
myEmitter.on('log', (msg, filName) => logEvents(msg, fileName));
const PORT = process.env.PORT || 3500;

const serveFile = async (filePath, contentType, response) => {
	try {
		const rowData = await fsPromises.readFile(
			
		)
	}
}