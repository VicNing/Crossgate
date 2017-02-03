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
import NavBar from './components/NavBar'
import StreamList from './components/StreamList'
import Welcome from './components/Welcome'
import SearchResult from './components/SearchResult'

function App(props) {
    return (
        <div style={{height: '100%'}}>
            <NavBar/>
            {props.children}
        </div>
    );
}

function Index(props) {
    return (
        <div style={{height: '100%'}}>
            <Welcome/>
            <StreamList/>
        </div>
    );
}

function Search(props) {
    return (
        <div>
            <SearchResult/>
        </div>
    );
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Index}/>
            <Route path='/search' components={Search}/>
        </Route>
    </Router>, document.getElementById('root'));