/**
 * Created by Neil on 2017/2/3.
 */
import React from 'react'

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button id="menu-toggle" type="button" className="navbar-toggle">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar bar1"/>
                            <span className="icon-bar bar2"/>
                            <span className="icon-bar bar3"/>
                        </button>
                        <a className="navbar-brand" href="http://gsdk.creative-tim.com">CrossGate</a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="active">
                                <a href="index.html">stream list</a>
                            </li>
                            <li>
                                <a href="search.html">search</a>
                            </li>
                            <li>
                                <a href="#">management</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}