const exec = require('child_process').execFile;
const trim = require('trim');

const run = function(command, hid){
    hid = trim(hid);
    console.log(command)
    console.log(hid)
    exec('C:/dev/gpuoo/devcon/devcon.exe', [command, hid], function(err, data) {  
        if (err) throw err
        if (data) console.log(hid, data.toString())
    });
}

module.exports = devcon = {run: run};
