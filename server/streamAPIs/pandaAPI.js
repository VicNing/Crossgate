/**
 * Created by Neil on 2017/1/23.
 */
const {doRequest} = require('../utils');

function getRoomInfo(id) {
    return doRequest(
        {
            url: 'http://api.m.panda.tv/ajax_get_liveroom_baseinfo',
            qs: {roomid: id, type: 'json'},
            json: true
        },
        function (res, body) {
            let roomInfo = body.data.info;
            return {
                avatar: roomInfo.hostinfo.avatar,
                capture: roomInfo.roominfo.pictures.img,
                link: `http://www.panda.tv/${id}`,
                online: roomInfo.roominfo.person_num,
                platform: 'panda',
                roomid: id,
                state: roomInfo.videoinfo.status === '3' ? 0 : 1,
                streamer: roomInfo.hostinfo.name,
                title: roomInfo.roominfo.name
            };
        });
}

function searchByKeywords(keyword, offset) {
    return doRequest(
        {
            url: 'http://api.m.panda.tv/ajax_search',
            qs: {keyword: keyword, pageno: offset + 1/*start form 1*/, WTFpagenum: 20},
            json: true
        },
        function (res, body) {
            let result = body.data;
            return {
                amount: result.items.length,
                data: result.items.map(function (item, index) {
                    return {
                        avatar: '',
                        capture: item.pictures.img,
                        link: `http://www.panda.tv/${item.roomid}`,
                        online: item.person_num,
                        platform: 'panda',
                        roomid: item.roomid,
                        state: item.status === '3' ? 0 : 1,
                        streamer: item.nickname,
                        title: item.name
                    };
                })
            };
        }
    );
}



module.exports = {getRoomInfo, searchByKeywords};