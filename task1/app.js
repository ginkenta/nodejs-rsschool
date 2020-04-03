const { pipeline } = require('stream');
const ReadableStream = require('./src/streams/ReadableStream');
const TransformStream = require('./src/streams/TransformStream');
const WritebleStream = require('./src/streams/WritebleStream');

pipeline(ReadableStream, TransformStream, WritebleStream, err => {
  if (err) console.error(err);
});
