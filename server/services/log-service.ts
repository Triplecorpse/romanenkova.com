import fs = require('fs');
// const Log = require('log');
// const log = new Log('info', fs.createWriteStream('./my.log'));
export default {
    info(...args: Array<any>) {
        beforeEach(...args);
        // log.info(...args);
    },
    error(...args: Array<any>) {
        beforeEach(...args);
        // log.error(...args);
    },
    warning(...args: Array<any>) {
        beforeEach(...args);
        // log.warning(...args);
    }
};

function beforeEach(...args: Array<any>) {
    console.log(...args);
}
