(function () {

var readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);

exports.console = function () {

  rl.setPrompt('?> ');
  rl.prompt();

  var state = "stopped";
  var timer, startTime, endTime;

  rl.on('line', function(line) {
    switch(line.trim()) {
      case 'start':
        if (state == "started") {
          console.log('timer already running');
        } else {
          startTime = new Date();
          console.log('timer started...');
          state = "started";
        }
        break;
      case 'time':
        if (state == "stopped") {
          console.log('timer is not running');
        } else {
          endTime = new Date();
          console.log('running for: %s seconds', (endTime - startTime) / 1000);
        }
        break;
      case 'stop':
        if (state == "stopped") {
          console.log('timer is not running');
        } else {
          endTime = new Date();
          console.log('timer stopped: %s seconds', (endTime - startTime) / 1000);
          state = "stopped";
        }
        break;
      default:
        console.log('unknown command `' + line.trim() + '`');
        break;
    }
    rl.prompt();
  }).on('close', function() {
    console.log('Have a great day!');
    process.exit(0);
  });
}})(this)