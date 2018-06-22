const fs = require('fs');
const log = require('./log-service');

function readFile(path, options = 'UTF8') {
    return new Promise (executor);

    function executor(resolve, reject) {
        fs.readFile(path, options, (err, data) => {
            if (err) {
                reject(err);
                log.error(`Error reading file ${path}`, err);
            } else {
                resolve(data);
                log.info(`File ${path} was read successfully`);
            }
        });
    }
}

module.exports = {readFile};
