/**
 * Created by Neil on 2017/2/4.
 */
import React from 'react'
import {connect} from 'react-redux'
import {alterSearchChecks} from '../actions/index'

class SearchRow extends React.Component {
    constructor(props) {
        super(props);

        this.handleCheck = this.handleCheck.bind(this);
    }

    render() {
        return (
            <tr>
                <td className="text-center">
                    <input id={`box${this.props.index}`}
                           type="checkbox"
                           checked={this.props.checked}
                           onChange={this.handleCheck}
                    />
                    <label className="custom-checkbox" htmlFor={`box${this.props.index}`}/>
                </td>
                <td>{this.props.data.streamer}</td>
                <td>{this.props.data.roomid}</td>
                <td>{this.props.data.title}</td>
                <td>
                    {this.props.data.state ?
                        <span className="label label-success">streaming</span> :
                        <span className="label label-default">offline</span>}
                </td>
                <td className="text-center">{this.props.data.platform}</td>
                <td className="text-center">{this.props.data.online}</td>
            </tr>
        );
    }

    handleCheck(e) {
        this.props.onRowsCheck(this.props.index, e.target.checked);
    }
}

function mapStateToProps(state, ownProps) {
    return {
        checked: (state.searchResult.checks[ownProps.index] === true),
        data: ownProps.data,
        index: ownProps.index
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onRowsCheck: function (index, checked) {
            dispatch(alterSearchChecks(index, checked));
        }
    }
}

const SearchRowCon = connect(mapStateToProps, mapDispatchToProps)(SearchRow);
export default SearchRowCon