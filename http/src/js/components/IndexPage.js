/**
 * Created by Neil on 2017/2/4.
 */
import React from 'react'
import WelcomeCon from './Welcome'
import StreamListCon from './StreamList'

export default function IndexPage(props) {
    return (
        <div style={{height: '100%'}}>
            <WelcomeCon/>
            <StreamListCon/>
        </div>
    );
}