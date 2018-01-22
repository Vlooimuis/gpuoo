const devcon = require('./devcon.js')
const cronner = require('./cronner');

const run = function (program) {
  if (program.cron) {
    cronner.createCronJob(program)
  } else if (program.disable) {
    loopAndExecute('disable', program.disable)
  } else if (program.enable) {
    loopAndExecute('enable', program.enable)
  } else if (program.status) {
    loopAndExecute('status', program.status)
  } else if (program.restart) {
    loopAndExecute('disable', program.restart)
    setTimeout(function () {
      loopAndExecute('enable', program.restart)
    }, 2000)
  }
  function loopAndExecute (command, list) {
    for (index in list) {
      devcon.run(command, list[index])
    }
  }
}


module.exports = operations = {run: run}
