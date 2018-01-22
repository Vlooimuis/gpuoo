const program = require('commander')
const operations = require('./operations');

function list (val) {
  return val.split(',')
}

program
  .version('0.1.0')
  .option('-d, --disable <HID>', 'enable <HIDs>', list)
  .option('-e, --enable <HID>', 'disable <HIDs>', list)
  .option('-s, --status <HID>', 'status of <HIDs>', list)
  .option('-r, --restart <HID>', 'restart <HIDs>', list)
  .option('-c, --cron <command> <HID>', 'create cron with <command> and <HIDs>', list)

program.parse(process.argv)
operations.run(program)