/**
 * Created by Neil on 2017/1/23.
 */
const {doRequest} = require('../utils');

function getRoomInfo(id) {
    return doRequest(
        {
            url: `http://open.douyucdn.cn/api/RoomApi/room/${id}`,
            json: true
        }, function (res, body) {
            let roomInfo = body.data;
            return {
                avatar: roomInfo.avatar,
                capture: roomInfo.room_thumb,
                link: `https://www.douyu.com/${id}`,
                online: roomInfo.online,
                platform: 'douyu',
                roomid: id,
                state: roomInfo.room_status === '2' ? 0 : 1,
                streamer: roomInfo.owner_name,
                title: roomInfo.room_name
            };
        });
}

function searchByKeywords(keyword, offset) {
    return doRequest({
        url: `http://capi.douyucdn.cn/api/v1/searchNew/<${encodeURI(keyword)}>/1`,
        json: true,
        qs: {limit: 20, offset: offset}
    }, function (res, body) {
        let result = body.data;
        return {
            amount: result.room.length,
            data: result.room.map(function (item, index) {
                return {
                    avatar: item.avatar,
                    capture: item.room_src,
                    link: `https://www.douyu.com${item.url}`,
                    online: item.online,
                    platform: 'douyu',
                    roomid: item.room_id,
                    state: item.show_status === '2' ? 0 : 1,
                    streamer: item.nickname,
                    title: item.room_name
                };
            }),
        };
    });
}

module.exports = {getRoomInfo, searchByKeywords};

// function getDouyuRoomInfo(query) {
//     let url = null;
//     if (typeof query === 'number' || validStrToNum(query)) {
//         url = `http://capi.douyucdn.cn/api/v1/searchNew/${query}/1`;
//         return doRequest(url);
//     } else if (typeof query === 'string') {
//         url = `http://capi.douyucdn.cn/api/v1/searchNew/<${encodeURIComponent(query)}>/1`;
//         return doRequest(url);
//     } else {
//         return new Promise(function (resolve, reject) {
//             reject(new Error('Not a valid query.'));
//         });
//     }
// }
//
// function doRequest(url) {
//     let requestOption = {
//         url: url,
//         qs: {limit: 5, offset: 0},
//         json: true
//     };
//
//     return new Promise(function (resolve, reject) {
//         request(requestOption, function (err, req, body) {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve({req, body});
//             }
//         });
//     });
// }
