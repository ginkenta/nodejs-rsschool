const fs = require('fs');
const inputFile = require('../services/ParseStdin').input;

module.exports = inputFile
  ? fs.createReadStream(inputFile, { flags: 'r+' })
  : process.stdin;
