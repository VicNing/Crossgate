/**
 * Created by Neil on 2017/2/25.
 */
const {doRequest} = require('../utils');

function getRoomInfo(id) {
    return doRequest(
        {
            url: `https://api.twitch.tv/kraken/streams/${id}`,
            headers: {'Accept': 'application/vnd.twitchtv.v5+json', 'Client-ID': 'mmdf2c27cepaz9w0b1vvrgbi7j5vvr'},
            json: true
        }, function (res, body) {
            if (body.stream === null) {
                return null;
            } else {
                return {
                    avatar: body.stream.channel.logo,
                    capture: body.stream.preview.medium,
                    link: body.stream.channel.url,
                    online: body.stream.viewers,
                    platform: 'twitch',
                    roomid: body.stream.channel._id,
                    state: 1,
                    streamer: body.stream.channel.display_name,
                    title: body.stream.channel.status
                };
            }
        })
        .then(function (data) {
            if (data) {
                return data;
            } else {
                return doRequest({
                    url: `https://api.twitch.tv/kraken/channels/${id}`,
                    headers: {
                        'Accept': 'application/vnd.twitchtv.v5+json',
                        'Client-ID': 'mmdf2c27cepaz9w0b1vvrgbi7j5vvr'
                    },
                    json: true
                }, function (req, body) {
                    return {
                        avatar: body.logo,
                        capture: body.video_banner,
                        link: body.url,
                        online: 0,//
                        platform: 'twitch',
                        roomid: body._id,
                        state: 0,
                        streamer: body.display_name,
                        title: body.status
                    };
                });
            }
        });
}

function searchByKeywords(keyword, offset) {
    return doRequest({
        url: `https://api.twitch.tv/kraken/search/streams`,
        json: true,
        headers: {'Accept': 'application/vnd.twitchtv.v5+json', 'Client-ID': 'mmdf2c27cepaz9w0b1vvrgbi7j5vvr'},
        qs: {query: keyword, offset: offset, limit: 20}
    }, function (res, body) {
        return {
            amount: body.streams.length,
            data: body.streams.map(function (item, index) {
                return {
                    avatar: item.channel.logo,
                    capture: item.preview.medium,
                    link: item.channel.url,
                    online: item.viewers,
                    platform: 'twitch',
                    roomid: item.channel._id,
                    state: 1,//TODO sth wierd here.
                    streamer: item.channel.display_name,
                    title: item.channel.status
                };
            }),
        };
    });
}

module.exports = {searchByKeywords, getRoomInfo};