/**
 * Created by Neil on 2017/3/22.
 */
import React from 'react'
import StreamListCon from './StreamList'
import {connect} from 'react-redux'

export default class SubsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <StreamListCon/>
            </div>
        );
    }
}