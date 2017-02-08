/**
 * Created by Neil on 2017/2/4.
 */

import {
    ALTER_WELCOME, CHANGE_PAGE, SEARCH_REQUEST,
    UPDATE_SEARCH_RESULT, ADD_STREAM_LIST, STREAM_LIST_REQUEST,
    UPDATE_STREAM_LIST, ADD_LOCAL_LIST, ALTER_SEARCH_CHECKS
}
    from '../actions/index'

function welcomeDisplayed(state = true, action) {
    switch (action.type) {
        case ALTER_WELCOME:
            return action.state;
        default:
            return state;
    }
}

function streamList(state = {amount: 0, data: []}, action) {
    switch (action.type) {
        case ADD_STREAM_LIST:
            return {
                amount: state.amount + action.count,
                data: state.data.concat(action.data)
            };
        case UPDATE_STREAM_LIST:
            return action.data;
        default:
            return state;
    }
}

function currentPage(state = 1, action) {
    switch (action.type) {
        case CHANGE_PAGE:
            return action.page;
        default :
            return state;
    }
}

function searchResult(state = {amount: 0, data: [], checks: []}, action) {
    switch (action.type) {
        case UPDATE_SEARCH_RESULT:
            return {
                amount: action.data.amount,
                data: action.data.data,
                checks: []
            };
        case ALTER_SEARCH_CHECKS:
            let clone = state.checks.map(item => item);
            clone[action.index] = action.checked;
            return Object.assign({}, state, {checks: clone});
        default:
            return state;
    }
}

function searchRequest(state, action) {
    switch (action.type) {
        case SEARCH_REQUEST:
            return {
                status: action.status,
                query: searchQuery(state.query, action)
            };
        default:
            return {
                status: 'idle',
                query: {input: '', select: ''}
            };
    }
}

function searchQuery(state = {input: '', select: ''}, action) {
    switch (action.type) {
        case SEARCH_REQUEST:
            if (action.status === 'requesting') {
                return action.query;
            } else if (action.status === 'success' || action.status === 'error') {
                let query = {};
                return Object.assign(query, state);
            } else if (action.status === 'idle') {
                return {input: '', select: ''}
            }
            break;
        default:
            return state;
    }
}

function streamlistRequest(state = {status: 'idle'}, action) {
    switch (action.type) {
        case STREAM_LIST_REQUEST:
            return {status: action.status};
            break;
        default:
            return state;
    }
}

function localList(state = {amount: 0, data: []}, action) {
    switch (action.type) {
        case ADD_LOCAL_LIST:
            return {
                amount: state.amount + action.count,
                data: state.data.concat(action.data)
            };
        default:
            return state;
    }
}

export default function appReducer(state, action) {
    return {
        welcomeDisplayed: welcomeDisplayed(state.welcomeDisplayed, action),
        currentPage: currentPage(state.currentPage, action),
        searchRequest: searchRequest(state.searchRequest, action),
        streamlistRequest: streamlistRequest(state.streamlistRequest, action),
        localList: localList(state.localList, action),
        streamList: streamList(state.streamList, action),
        searchResult: searchResult(state.searchResult, action),

    }
}

