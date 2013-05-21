var program = require('commander');
var timer = require('./timeit');

program
  .version('0.0.1')
  .parse(process.argv);

timer.console();

