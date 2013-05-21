var program = require('commander');
var timer = require('./timer');

program
  .version('0.1.4')
  .parse(process.argv);

timer.console();

