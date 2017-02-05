/**
 * Created by Neil on 2017/2/3.
 */
import React from 'react'
import {connect} from 'react-redux'
import StreamCardCon from './StreamCard'
import PagiCon from './Pagi'
import {changePage} from '../actions/index'

class StreamList extends React.Component {
    constructor(props) {
        super(props);
        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    render() {
        let cards = this.props.data
            .slice((this.props.currentPage - 1) * 16, this.props.currentPage * 16)
            .map((data, index) =>
                <StreamCardCon
                    data={data}
                    key={(this.props.currentPage - 1) * 16 + index}/>);

        let pagis = [];
        for (let i = 0; i < Math.ceil(this.props.amount / 16); i++) {
            let page = i + 1;
            pagis.push(<PagiCon key={page} page={page}/>);
        }

        return (
            <section className="list">
                <div className="container">
                    <div className="row">
                        {cards}
                    </div>
                    <div className="row pagi">
                        <ul className="pagination pagination-blue pagination-no-border">
                            <li><a href="#" onClick={this.handlePrev}>&laquo;</a></li>
                            {pagis}
                            <li><a href="#" onClick={this.handleNext}>&raquo;</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }

    handlePrev(e) {
        e.preventDefault();
        if (this.props.currentPage !== 1) {
            this.props.onPagiClick(this.props.currentPage - 1);
        }
    }

    handleNext(e) {
        e.preventDefault();
        if (this.props.currentPage !== Math.ceil(this.props.amount / 16)) {
            this.props.onPagiClick(this.props.currentPage + 1);
        }
    }
}

function mapStateToProps(state, ownProps) {
    return {
        amount: state.streamList.amount,
        data: state.streamList.data,
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

const StreamListCon = connect(mapStateToProps, mapDispatchToProps)(StreamList);
export default StreamListCon