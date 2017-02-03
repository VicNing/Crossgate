/**
 * Created by Neil on 2017/1/23.
 */
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

module.exports = {validStrToNum};