/**
 * Created by Neil on 2017/2/3.
 */
import React from 'react'
import {connect} from 'react-redux'
import StreamCardCon from './StreamCard'
import PagiCon from './Pagi'
import {changePage, fetchStreamList} from '../actions/index'

class StreamList extends React.Component {
    constructor(props) {
        super(props);
        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.initialRequest = this.initialRequest.bind(this);
        this.initialRequest();
    }

    render() {
        /*let cards = this.props.data
         .slice((this.props.currentPage - 1) * 16, this.props.currentPage * 16)
         .map((data, index) =>
         <StreamCardCon
         data={data}
         key={(this.props.currentPage - 1) * 16 + index}/>);

         let pagis = [];
         for (let i = 0; i < Math.ceil(this.props.amount / 16); i++) {
         let page = i + 1;
         pagis.push(<PagiCon key={page} page={page}/>);
         }*/
        if (this.props.cards.length === 0) {
            return (
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    width:'100%',
                    transform: 'translateY(-50%)',
                }}>
                    <p
                        style={{
                            textAlign: 'center',
                            fontSize:'35px',
                            color:'#757575'
                        }}>
                        Oops, seems like you have not subscribed one channel yet...
                    </p>
                </div>
            );
        } else {
            return (
                <section className="list">
                    <div className="container">
                        <div className="row">
                            {this.props.cards}
                        </div>
                        <div className="row pagi">
                            <ul className="pagination pagination-blue pagination-no-border">
                                <li><a href="#" onClick={this.handlePrev}>&laquo;</a></li>
                                {this.props.pagis}
                                <li><a href="#" onClick={this.handleNext}>&raquo;</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            );
        }
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

    initialRequest() {
        // if (this.props.amount === 0 && this.props.localAmount !== 0) {
        //     this.props.initialRequest();
        // }
        if (this.props.localAmount !== 0 && this.props.amount !== this.props.localAmount) {
            this.props.initialRequest();
        }
    }

}

function mapStateToProps(state, ownProps) {

    let cards = state.streamList.data
        .slice((state.currentPage - 1) * 16, state.currentPage * 16)
        .map((data, index) =>
            <StreamCardCon
                data={data}
                key={(state.currentPage - 1) * 16 + index}/>);

    let pagis = [];
    for (let i = 0; i < Math.ceil(state.streamList.amount / 16); i++) {
        let page = i + 1;
        pagis.push(<PagiCon key={page} page={page}/>);
    }

    return {
        cards: cards,
        pagis: pagis,
        // amount: state.streamList.amount,
        // data: state.streamList.data,
        // currentPage: state.currentPage,
        localAmount: state.localList.amount
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onPagiClick: function (page) {
            dispatch(changePage(page));
        },
        initialRequest(){
            dispatch(fetchStreamList());
        }
    }
}

const StreamListCon = connect(mapStateToProps, mapDispatchToProps)(StreamList);
export default StreamListCon