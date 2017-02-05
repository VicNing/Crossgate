/**
 * Created by Neil on 2017/2/4.
 */
import React from 'react'
import {connect} from 'react-redux'

class StreamCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-3 col-sm-6 col-xs-6">
                <div className="card card-background">
                    <div className="image" style={{
                        backgroundImage: `url(${this.props.data.capture})`,
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover'
                    }}>
                        <img src={this.props.data.capture} alt="bgc" style={{display: 'none'}}/>
                        <div className="filter"></div>
                    </div>
                    <div className="content">
                        <div className="state">
                            {this.props.data.state ?
                                <span className="label label-success">streaming</span> :
                                <span className="label label-default">offline</span>}
                        </div>
                        <a href={this.props.data.link} target="_blank"><br/>
                            <h4 className="title">{this.props.data.title}</h4>
                        </a>
                    </div>
                    <div className="footer">
                        <div className="nickname">
                            <img
                                src={this.props.data.avatar}
                                alt="..." className="avatar"/>
                            <span>{this.props.data.streamer}</span>
                        </div>
                        <div className="stats pull-right">
                            <i className="fa fa-user" aria-hidden="true"/><span>{this.props.data.online}</span>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {data: ownProps.data}
}

function mapDispatchToProps(dispatch, ownProps) {
    return {}
}

const StreamCardCon = connect(mapStateToProps, mapDispatchToProps)(StreamCard);
export default StreamCardCon


