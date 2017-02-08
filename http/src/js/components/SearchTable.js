/**
 * Created by Neil on 2017/2/3.
 */
import React from 'react'
import {connect} from 'react-redux'
import SearchRowCon from './SearchRow'
import {syncLocalAndStore} from '../actions/index'

class SearchTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {rowChecks: []};
    }

    render() {
        return (
            <div className="search-result table-responsive">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th/>
                        <th>streamer</th>
                        <th>roomid</th>
                        <th>title</th>
                        <th>state</th>
                        <th className="text-center">platform</th>
                        <th className="text-center">online</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.rows}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td colSpan="6"/>
                        <td className="text-center">
                            <button type="button"
                                    onClick={this.props.onBtnClick}
                                    className="btn btn-primary btn-fill btn-l">
                                Add to list&nbsp;<i className="fa fa-chevron-right"/>
                            </button>
                        </td>
                    </tr>
                    </tfoot>
                </table>
            </div>
        );
    }

    // handleBtnClick(e) {
    //     let data = this.props.data.filter((item, index) => {
    //         if (this.state.rowChecks[index]) {
    //             return item;
    //         }
    //     });
    //     this.props.onBtnClick(data);
    // }

}

function mapStateToProps(state, ownProps) {
    let rows = state.searchResult.data
        .map((data, index) => {
            return (
                <SearchRowCon
                    key={index}
                    data={data}
                    index={index}/>);
        });
    return {
        rows: rows,
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onBtnClick: function (data) {
            dispatch(syncLocalAndStore());
        }
    }
}

const SearchTableCon = connect(mapStateToProps, mapDispatchToProps)(SearchTable);
export default SearchTableCon