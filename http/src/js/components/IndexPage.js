/**
 * Created by Neil on 2017/2/4.
 */
import React from 'react'
import WelcomeCon from './Welcome'
import StreamListCon from './StreamList'
import Intro from './Intro'
import Retro from './Retro'
import Footer from './Footer'

export default function IndexPage(props) {
    return (
        <div >
            <WelcomeCon/>
            <Intro/>
            <Retro/>
            <Footer/>
            {/*<StreamListCon/>*/}
        </div>
    );
}