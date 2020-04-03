const fs = require('fs');
const outputFile = require('../services/ParseStdin').output;

module.exports = outputFile
  ? fs.createWriteStream(outputFile, { flags: 'a+' })
  : process.stdout;
