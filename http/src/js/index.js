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
    /*streamList: {
     amount: 3,
     data: [{
     avatar: 'https://apic.douyucdn.cn/upload/avatar/000/12/63/31_avatar_big.jpg',
     capture: 'https://rpic.douyucdn.cn/a1702/04/03/3614_170204030455.jpg',
     link: 'https://www.douyu.com/quin',
     online: 0,
     platform: 'douyu',
     roomid: '3614',
     state: 0,
     streamer: 'quin',
     title: '【Quin】余生不过两万天'
     },
     {
     avatar: 'https://apic.douyucdn.cn/upload/avatar/013/61/93/07_avatar_big.jpg',
     capture: 'https://rpic.douyucdn.cn/a1702/04/12/229743_170204123618.jpg',
     link: 'https://www.douyu.com/229743',
     online: 9121,
     platform: 'douyu',
     roomid: '229743',
     state: 1,
     streamer: 'Douyu秋秋丶',
     title: '秋❤不存在的避难所'
     },
     {
     avatar: 'http://i7.pdim.gs/5b31fe4c82d6de655225065d8a5dee29.jpeg',
     capture: 'http://i5.pdim.gs/45/49e425deed25c14500b967b274a2ef37/w338/h190.jpg',
     link: 'http://www.panda.tv/513055',
     online: 19036,
     platform: 'panda',
     roomid: '513055',
     state: 1,
     streamer: '猫不会微笑_WOW',
     title: '1400小时猎空,美服宗师'
     },]
     },*/
    localList: localList
};
/*localStorage.setItem('cg_localList', JSON.stringify({
 amount: 3,
 data: [{platform: 'douyu', id: '3614'}, {platform: 'douyu', id: '229743'}, {platform: 'panda', id: '513055'}]
 }));*/
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