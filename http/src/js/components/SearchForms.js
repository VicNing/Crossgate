/**
 * Created by Neil on 2017/2/4.
 */
import React from 'react'
import {connect} from 'react-redux'
import {fetchResult} from '../actions/index'

class SearchForms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {input: '', select: 'Chose Platform'};

        this.onInputChange = this.onInputChange.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 ">
                        <div className="form-group">
                            <input type="text"
                                   value={this.state.input}
                                   placeholder="Keywords"
                                   className="form-control"
                                   onChange={this.onInputChange}/>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="form-group pull-right">
                            <select name="huge"
                                    value={this.state.select}
                                    onChange={this.onSelectChange}
                                    className="selectpicker"
                                    data-style="btn-primary btn-fill btn-block">
                                <option disabled>Chose Platform</option>
                                <option value="douyu">DouyuTv</option>
                                <option value="panda">PandaTv</option>
                                <option value="twitch">TwitchTv</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-2 ">
                        <button className="btn btn-primary btn-fill"
                                onClick={this.handleClick}>
                            search
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        if ($(".selectpicker").length != 0) {
            $(".selectpicker").selectpicker();
        }
    }

    onInputChange(e) {
        this.setState({input: e.target.value});
    }

    onSelectChange(e) {
        this.setState({select: e.target.value});
    }

    handleClick(e) {
        if (this.state.select !== 'Chose Platform' && this.state.input.trim() !== '') {
            this.props.onBtnClick(this.state.input.trim(), this.state.select);
            this.setState({input: ''});
        }
    }
}

function mapStateToProps(state, ownProps) {
    return {}
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onBtnClick: function (input, select) {
            dispatch(fetchResult(input, select));
        }
    }
}

const SearchFormsCon = connect(mapStateToProps, mapDispatchToProps)(SearchForms);
export default SearchFormsCon