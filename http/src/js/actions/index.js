/**
 * Created by Neil on 2017/2/4.
 */
export const ALTER_WELCOME = 'DISMISS_WELCOME';
import {DOMAIN, PORT, API} from '../varibles'

export function alterWelcome(state) {
    return {
        type: ALTER_WELCOME,
        state: state

    };
}

export const CHANGE_PAGE = 'CHANGE_PAGE';
export function changePage(page) {
    return {
        type: CHANGE_PAGE,
        page: page
    }
}

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export function searchRequest(status, query) {
    return {
        type: SEARCH_REQUEST,
        status: status,//requesting,success,error,idle
        query: query
    };
}

export const ALTER_SEARCH_CHECKS = 'ALTER_SEARCH_CHECKS';
export function alterSearchChecks(index, checked) {
    return {
        type: ALTER_SEARCH_CHECKS,
        index: index,
        checked: checked
    }
}

export const UPDATE_SEARCH_RESULT = 'UPDATE_SEARCH_RESULT';
export function updateSearchResult(data) {
    return {
        type: UPDATE_SEARCH_RESULT,
        data: data
    };
}

export function fetchResult(input, select) {
    return function (dispatch) {
        dispatch(searchRequest('requesting', {input, select}));
        return $.ajax({
            url: `/search?keyword=${input}&platform=${select}`,
            cache: false
        }).done(function (data, textStatus, jqXHR) {
            dispatch(searchRequest('success'));
            dispatch(updateSearchResult(data));
            dispatch(searchRequest('idle'));
        }).fail(function (jqXHR, textStatus, errorThrown) {
            dispatch(searchRequest('error'));
        });
    }
}

export const STREAM_LIST_REQUEST = 'STREAM_LIST_REQUEST';
export function streamlistRequest(stauts) {
    return {
        type: STREAM_LIST_REQUEST,
        status: stauts
    };
}

export const ADD_STREAM_LIST = 'ADD_STREAM_LIST';
export function addStreamList(data, count) {
    return {
        type: ADD_STREAM_LIST,
        data: data,
        count: count
    };
}

export const UPDATE_STREAM_LIST = 'UPDATE_STREAM_LIST';
export function updateStreamList(data, count) {
    return {
        type: UPDATE_STREAM_LIST,
        data: data,
    };
}

export function fetchStreamList() {
    return function (dispatch, getState) {
        let localList = '';
        try {
            localList = JSON.stringify(getState()['localList']);
        } catch (err) {
            console.log(err);
            return;
        }
        dispatch(streamlistRequest('requesting'));
        return $.ajax(
            {
                url: `/streamList`,
                method: 'POST',
                contentType: 'application/json; charset=UTF-8',
                data: localList
            })
            .done(function (data, textStatus, jqXHR) {
                dispatch(streamlistRequest('success'));
                dispatch(updateStreamList(data));
                dispatch(streamlistRequest('idle'));
            })
            .fail(function (data, textStatus, jqXHR) {
                dispatch(streamlistRequest('error'));
            });
    }
}

export const ADD_LOCAL_LIST = 'ADD_LOCAL_LIST';
export function addLocalList(data, count) {
    return {
        type: ADD_LOCAL_LIST,
        data: data,
        count: count
    };
}

export function syncLocalAndStore() {
    return function (dispatch, getState) {
        let state = getState();
        let data = state.searchResult.data.filter((item, index) => {
            if (state.searchResult.checks[index]) {
                return item;
            }
        });
        let count = data.length;
        let localIncrement = data.map((item, index) => {
            return {platform: item.platform, id: item.roomid};
        });
        let store_local = getState()['localList'];
        let storage_local = Object.assign({},
            store_local,
            {
                amount: store_local.amount + count,
                data: store_local.data.concat(localIncrement)
            });
        try {
            localStorage.setItem('cg_localList', JSON.stringify(storage_local));
        } catch (err) {
            console.log(err);
        }
        dispatch(addLocalList(localIncrement, count));
        dispatch(addStreamList(data, count));
    }
}

//mock state
let state = {
    searchRequest: {
        status: 'idle',
        query: {
            input: '',
            select: ''
        }
    },
    welcomeDisplayed: true,
    streamList: {
        amount: 12,
        data: [
            {
                avatar: 'https://apic.douyucdn.cn/upload/avatar/000/12/63/31_avatar_big.jpg',
                capture: 'https://rpic.douyucdn.cn/a1702/04/03/3614_170204030455.jpg',
                link: 'www.douyu.com/quin',
                online: 0,
                platform: 'douyu',
                state: 0,
                streamer: 'quin',
                title: '【Quin】余生不过两万天'
            }, {
                avatar: '',
                capture: 'https://rpic.douyucdn.cn/a1702/04/12/229743_170204123618.jpg',
                link: 'www.douyu.tv/229743',
                online: 9121,
                platform: 'douyu',
                state: 1,
                streamer: 'Douyu秋秋丶',
                title: '秋❤不存在的避难所'
            }
        ]
    },
    searchResult: {},
    localData: {
        amount: 12,
        data: [
            {platform: 'douyu', roomid: 3614},
            {platform: 'panda', roomid: 100130}
        ]
    }
};

let aa = {
    searchRequest: {
        status: 'idle',
        query: {
            input: '',
            select: ''
        }
    },
    welcomeDisplayed: true,
    streamList: {
        amount: 0,
        data: []
    },
    currentPage: 1,
    searchResult: {
        amount: 0,
        data: []
    },
    localList: {
        amount: 3,
        data: [
            {
                platform: 'douyu',
                id: '3614'
            },
            {
                platform: 'douyu',
                id: '229743'
            },
            {
                platform: 'panda',
                id: '513055'
            }
        ]
    }
};
