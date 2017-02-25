/**
 * Created by Neil on 2017/2/3.
 */
import bootstrapCSS from '../css/bootstrap.css'
import fontAwesomeCSS from '../css/font-awesome.css'
import gsdkCSS from '../css/gsdk.css'
import indexCSS from '../css/index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import IndexPage from './components/IndexPage'
import NavBarCon from './components/NavBar'
import SearchPage from './components/SearchPage'
import appReducer from './reducers/index'

function App(props) {
    return (
        <div style={{height: '100%'}}>
            <NavBarCon location={props.location}/>
            {props.children}
        </div>
    );
}

let localString = localStorage.getItem('cg_localList');
let localList = null;
if (localString !== null) {
    try {
        localList = JSON.parse(localString);
    } catch (err) {
        console.log(err);
    }
} else {
    try {
        localList = {amount: 0, data: []};
        localStorage.setItem('cg_localList', JSON.stringify(localList));
    } catch (err) {
        console.log(err);
    }
}

let initialState = {
    localList: localList
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(appReducer, initialState, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={IndexPage}/>
                <Route path='/search' components={SearchPage}/>
            </Route>
        </Router>
    </Provider>, document.getElementById('root'));