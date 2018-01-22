var crontab = require('node-crontab')
const operations = require('./operations.js')
const devcon = require('./devcon.js')

const createCronJob = function (program) {
  var cronTime = '0 */8 * * *'

  if (program.args[0] !== undefined) {
    cronTime = program.args[0]
  }

  console.log("Starting job with cron: " + cronTime)

  var cronner = crontab.scheduleJob(cronTime, function () {
    console.log(new Date() + '  ' + program.cron + ' ' + program.args)

    for (index in program.cron) {
      devcon.run('disable', program.cron[index])
      setTimeout(function () {
        devcon.run('enable', program.cron[index])
      }, 2000)
    }
  }, null, true, 'America/Los_Angeles')
}
module.exports = cron = {createCronJob: createCronJob}
