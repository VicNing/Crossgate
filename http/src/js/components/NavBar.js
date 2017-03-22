/**
 * Created by Neil on 2017/2/3.
 */
import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {displayShadow: false};
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.displayShadow === this.state.displayShadow && nextProps === this.props) {
            return false;
        }
        return true;
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(e) {
        if (window.pageYOffset < 10) {
            this.setState({displayShadow: false});
        }
        else {
            this.setState({displayShadow: true});
        }
    }

    render() {
        let navClassName = `navbar ${this.props.path === '/' && this.props.fixedTop ? 'navbar-fixed-top' : ''} 
        ${this.state.displayShadow || this.props.path !== '/' ? 'z-depth-1' : ''}`;
        return (
            <nav
                className={navClassName}
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
                                <Link to="/subs">stream list</Link>
                            </li>
                            <li>
                                <Link to="/search">search</Link>
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