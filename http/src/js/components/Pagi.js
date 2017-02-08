/**
 * Created by Neil on 2017/2/4.
 */
import React from 'react'
import {connect} from 'react-redux'
import {changePage} from '../actions/index'

class Pagi extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <li className={this.props.currentPage === this.props.page ? 'active' : ''}
                key={this.props.page}><a href="#" onClick={this.handleClick}>{this.props.page}</a></li>
        );
    }

    handleClick(e) {
        e.preventDefault();
        this.props.onPagiClick(this.props.page);
    }
}

function mapStateToProps(state, ownProps) {
    return {
        page: ownProps.page,
        currentPage: state.currentPage
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onPagiClick: function (page) {
            dispatch(changePage(page));
        }
    }
}

const PagiCon = connect(mapStateToProps, mapDispatchToProps)(Pagi);
export default PagiCon