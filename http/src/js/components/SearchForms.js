/**
 * Created by Neil on 2017/2/4.
 */
import React from 'react'

export default class SearchForms extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 ">
                        <div className="form-group">
                            <input type="text" value="" placeholder="Keywords" className="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="form-group pull-right">
                            <select name="huge"
                                    className="selectpicker"
                                    data-style="btn-primary btn-fill btn-block"
                                    defaultValue='Chose Platform'>
                                <option disabled>Chose Platform</option>
                                <option value="douyu">DouyuTv</option>
                                <option value="panda">PandaTv</option>
                                <option value="twitch">TwitchTv</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-2 ">
                        <button className="btn btn-primary btn-fill">search</button>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        if($(".selectpicker").length != 0){
            $(".selectpicker").selectpicker();
        }
    }
}