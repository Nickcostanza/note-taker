// Dependencies

const util = require('util');
const fs = require('fs');
var { v1: uuidv1 } = require('uuid');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

