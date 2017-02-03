/**
 * Created by Neil on 2017/1/23.
 */
const request = require('request');
const {validStrToNum} = require('../utils');

function getDouyuRoomInfo(query) {
    let url = null;
    if (typeof query === 'number' || validStrToNum(query)) {
        url = `http://capi.douyucdn.cn/api/v1/searchNew/${query}/1`;
        return doRequest(url);
    } else if (typeof query === 'string') {
        url = `http://capi.douyucdn.cn/api/v1/searchNew/<${encodeURIComponent(query)}>/1`;
        return doRequest(url);
    } else {
        return new Promise(function (resolve, reject) {
            reject(new Error('Not a valid query.'));
        });
    }
}

function doRequest(url) {
    let requestOption = {
        url: url,
        qs: {limit: 5, offset: 0},
        json: true
    };

    return new Promise(function (resolve, reject) {
        request(requestOption, function (err, req, body) {
            if (err) {
                reject(err);
            } else {
                resolve({req, body});
            }
        });
    });
}

module.exports = {getDouyuRoomInfo};