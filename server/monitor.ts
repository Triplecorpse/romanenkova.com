const monitor = require('os-monitor');
const fs = require('fs');

export function startMonitoring() {
  monitor.start({ stream: true });
  const logFile = fs.createWriteStream('os-log.txt', {flags: 'a'});
  monitor.pipe(process.stdout);
  monitor.pipe(logFile);
}
