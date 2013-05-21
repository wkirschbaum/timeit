#!/usr/local/bin/node

var program = require('commander');
var timer = require('./timer');

program
  .version('0.1.5')
  .parse(process.argv);

timer.console();

