const program = require('commander');
const fs = require('fs');

program
  .requiredOption('-s, --shift <value>', 'a shift (integer value)', v => {
    if (isNaN(Number(v))) {
      process.stderr.write('Error: Shift should be a number');
      process.exit(-1);
    } else {
      return parseInt(v, 10);
    }
  })
  .option('-i, --input <file>', 'an input file', filePath => {
    try {
      fs.accessSync(filePath);
      fs.statSync(filePath);
    } catch (err) {
      if (err.code === 'ENOENT') {
        process.stderr.write(`Error: File ${filePath} doesn't exist!\n`);
      }
      if (err.code === 'EACCES') {
        process.stderr.write(`Error: No access to file ${filePath}!\n`);
      }
      process.exit(-1);
    }
    return filePath;
  })
  .option('-o, --output <file>', 'an output file', filePath => {
    try {
      fs.accessSync(filePath);
      fs.statSync(filePath);
    } catch (err) {
      if (err.code === 'ENOENT') {
        process.stderr.write(`Error: File ${filePath} doesn't exist!\n`);
      }
      if (err.code === 'EACCES') {
        process.stderr.write(`Error: No access to file ${filePath}!\n`);
      }
      process.exit(-1);
    }
    return filePath;
  })
  .requiredOption('-a, --act <value>', 'an action encode/decode', val => {
    const enabledAction = ['encode', 'decode'];
    if (!enabledAction.includes(val)) {
      process.stderr.write('Error: No such action code (encode or decode)\n');
      process.exit(-1);
    } else return val;
  });

program.parse(process.argv);

module.exports = program;
