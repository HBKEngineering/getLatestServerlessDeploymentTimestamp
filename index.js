const exec = require('child_process').exec;
const stage = process.env.STAGE || 'production'

exec('./node_modules/.bin/serverless deploy list --stage=' + stage, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  
  var m = stdout.match(/Timestamp\:\s+(\d+)/ig);

  console.log(m[m.length - 1].substring(11))
});