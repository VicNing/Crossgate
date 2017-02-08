/**
 * Created by Neil on 2017/1/23.
 */
const request = require('request');

function doRequest(options, callback) {
    return new Promise((resolve, reject) => {
        request(options, function (err, res, body) {
            if (err) {
                reject(err);
            } else {
                resolve(callback(res, body));
            }
        })
    });
}

function validStrToNum(str, fullLength) {
    if (fullLength) {
        switch (str) {
            case str === null:
            case str === undefined:
            case typeof str === Boolean:
            case str.trim() === '':
            case isNaN(Number(str)):
            case str.search(/^(0x)[0-9|a-f]*$/) !== -1:
                return false;
            default:
                return true;
        }
    } else {
        return !isNaN(parseInt(str));
    }
}

module.exports = {doRequest, validStrToNum};