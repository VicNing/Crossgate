/**
 * Created by Neil on 2017/2/3.
 */
import React from 'react'
import {connect} from 'react-redux'
import SearchRow from './SearchRow'

class SearchTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="search-result table-responsive">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th/>
                        <th>title</th>
                        <th>streamer</th>
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
                        <td colSpan="5"/>
                        <td className="text-center">
                            <button type="button" className="btn btn-primary btn-fill btn-l">Add to list&nbsp;<i
                                className="fa fa-chevron-right"/></button>
                        </td>
                    </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    let rows = state.searchResult.data
        .map((data, index) => <SearchRow key={index} data={data} index={index}/>);
    return {
        rows: rows,
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {}
}

const SearchTableCon = connect(mapStateToProps, mapDispatchToProps)(SearchTable);
export default SearchTableCon