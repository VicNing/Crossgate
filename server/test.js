/**
 * Created by Neil on 2017/2/7.
 */
const {searchByKeywords, getRoomInfo} = require('./streamAPIs/twitchAPI');

// searchByKeywords('star', 0).then(function (data) {
//     console.log(data);
// });

getRoomInfo(123484627).then((data) => {
    console.log(data);
});

