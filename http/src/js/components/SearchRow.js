/**
 * Created by Neil on 2017/2/4.
 */
import React from 'react'

export default class SearchRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td className="text-center">
                    <input id={`box${this.props.index}`} type="checkbox"/>
                    <label className="custom-checkbox" htmlFor={`box${this.props.index}`}/>
                </td>
                <td>{this.props.data.title}</td>
                <td>{this.props.data.streamer}</td>
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
}