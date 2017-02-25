const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const {host, port, contentDir} = require('./constants');
const douyuApi = require('./streamAPIs/douyuAPI');
const pandaApi = require('./streamAPIs/pandaAPI');
const twitchApi = require('./streamAPIs/twitchAPI');

const mapPlatformToApi = {
    'douyu': douyuApi,
    'panda': pandaApi,
    'twitch':twitchApi
};

const app = express();
app.use(express.static(contentDir));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    fs.createReadStream(path.join(__dirname, contentDir, 'index.html'), 'utf8')
        .pipe(res);
});

app.get('/search', function (req, res) {
    fs.createReadStream(path.join(__dirname, contentDir, 'index.html'), 'utf8')
        .pipe(res);
});

app.get('/api/search', function (req, res) {
    mapPlatformToApi[req.query.platform]
        .searchByKeywords(req.query.keyword, 0)
        .then(function (data) {
            res.json(data);
        });
});

app.post('/api/streamList', function (req, res) {
    let promises = req.body.data.map((item) => {
        return mapPlatformToApi[item.platform].getRoomInfo(item.id);
    });
    Promise.all(promises)
        .then(function (data) {
            let responseData = {
                amount: data.length,
                data: data
            };
            res.json(responseData);
        })
        .catch(function (err) {
            console.error(err);
        });
});

app.use(function (err, req, res, next) {
    console.error('custom' + err.stack);
    res.status(500).send('error');
});

app.listen(port, host);