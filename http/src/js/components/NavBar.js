/**
 * Created by Neil on 2017/2/3.
 */
import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav
                className={`navbar ${this.props.path === '/' && this.props.fixedTop ? 'navbar-fixed-top' : ''}`}
                role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button id="menu-toggle" type="button" className="navbar-toggle">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar bar1"/>
                            <span className="icon-bar bar2"/>
                            <span className="icon-bar bar3"/>
                        </button>
                        <Link className="navbar-brand" to="/">CrossGate</Link>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="active">
                                <Link href="index.html" to="/">stream list</Link>
                            </li>
                            <li>
                                <Link href="search.html" to="/search">search</Link>
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

function mapStateToProps(state, ownProps) {
    return {
        fixedTop: state.welcomeDisplayed,
        path: ownProps.location.pathname
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {}
}

const NavBarCon = connect(mapStateToProps, mapDispatchToProps)(NavBar);
export default NavBarCon