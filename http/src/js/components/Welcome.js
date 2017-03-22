/**
 * Created by Neil on 2017/2/3.
 */
import React from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import {alterWelcome, fetchResult} from'../actions/index'

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {input: '', select: 'Chose Platform'};

        this.onInputChange = this.onInputChange.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <section className="welcome"
                     style={{display: this.props.welcomeDisplayed ? 'flex' : 'none',height:`${window.innerHeight}px`}}>
                <i className="fa fa-times close-welcome"
                   aria-hidden="true"
                   style={{display: this.props.displayClose ? 'block' : 'none'}}
                   onClick={this.props.onCloseWelcome}/>
                <h2>ADDS YOUR FAVORITE STREAM TO LIST</h2>
                <div className="container">
                    <div className="form-inline">
                        <div className="form-group">
                            <input type="text"
                                   value={this.state.input}
                                   placeholder="Keywords"
                                   className="form-control"
                                   onChange={this.onInputChange}/>
                        </div>
                        <div className="form-group">
                            <select name="huge"
                                    className="selectpicker"
                                    data-style="btn-primary btn-fill btn-block"
                                    onChange={this.onSelectChange}
                                    value={this.state.select}>
                                <option disabled>Chose Platform</option>
                                <option value="douyu">DouyuTv</option>
                                <option value="panda">PandaTv</option>
                                <option value="twitch">TwitchTv</option>
                            </select>
                        </div>
                        <button className="btn btn-primary btn-fill"
                                onClick={this.handleClick}>
                            search
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    componentDidMount() {
        let selectpicker = $(".selectpicker");
        if (selectpicker.length != 0) {
            selectpicker.selectpicker();
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
            browserHistory.push('search');
            this.setState({input: ''});
        }
    }
}

function mapStateToProps(state, ownProps) {
    return {
        welcomeDisplayed: state.welcomeDisplayed,
        displayClose: !(state.streamList.amount === 0)
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onCloseWelcome: function () {
            dispatch(alterWelcome(false));
        },
        onBtnClick: function (input, select) {
            dispatch(fetchResult(input, select));
        }
    }
}

const WelcomeCon = connect(mapStateToProps, mapDispatchToProps)(Welcome);
export default WelcomeCon