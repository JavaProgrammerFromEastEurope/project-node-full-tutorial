const { format} = require('date-fns');
const { v4: uuid } = require('uuid');

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async(message, logName) => {
	const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
	
}