const express = require('express');
const fs = require('fs');
const path = require('path');
const {host, port, contentDir} = require('./constants');
const {getDouyuRoomInfo} = require('./streamAPIs/douyuAPI');


const app = express();
let router = express.Router();
router();

app.get('/', function (req, res) {
    fs.createReadStream(path.join(__dirname, contentDir, 'index.html'), 'utf8')
        .pipe(res);
});
// app.use(function (req, res, next) {
//     console.log(req.query);
//     console.log(Date.now());
//     console.log('middleware');
//     next();
// });

app.get('/api/searchroom', function (req, res) {
    console.log(Date.now());
    switch (req.query.platform) {
        case 'douyuTv':
            getDouyuRoomInfo(req.query.query)
                .then(function (data) {
                    res.json(data.body);
                })
                .catch(err => console.error(err));
    }
});

app.listen(port, host);