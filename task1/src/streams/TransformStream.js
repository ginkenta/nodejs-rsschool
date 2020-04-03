const { Transform } = require('stream');
const transformText = require('../services/TransformText');
const program = require('../services/ParseStdin');

class TransformStream extends Transform {
  constructor(shift, act, ...options) {
    super(options);
    this.shift = shift;
    this.action = act;
  }
  _transform(data, encoding, callback) {
    this.push(transformText(data, this.shift, this.action));
    callback();
  }
}

module.exports = new TransformStream(program.shift, program.act);
