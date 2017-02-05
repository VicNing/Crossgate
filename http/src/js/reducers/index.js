/**
 * Created by Neil on 2017/2/4.
 */

import {ALTER_WELCOME, CHANGE_PAGE} from '../actions/index'

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

function searchResult(state = {amount: 0, data: []}, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default function appReducer(state, action) {
    return {
        welcomeDisplayed: welcomeDisplayed(state.welcomeDisplayed, action),
        streamList: streamList(state.streamList, action),
        currentPage: currentPage(state.currentPage, action),
        searchResult: searchResult(state.searchResult, action)
    }
}

