/**
 * Created by Neil on 2017/2/3.
 */
import React from 'react'

export default class Welcome extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <section className="welcome">
                <i className="fa fa-times close-welcome" aria-hidden="true"/>
                <h2>ADDS YOUR FAVORITE STREAM TO LIST</h2>
                <div className="container">
                    <div className="form-inline">
                        <div className="form-group">
                            <input type="text" value="" placeholder="Keywords" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <select name="huge" className="selectpicker" data-style="btn-primary btn-fill btn-block" defaultValue='Chose Platform'>
                                <option disabled>Chose Platform</option>
                                <option value="douyu">DouyuTv</option>
                                <option value="panda">PandaTv</option>
                                <option value="twitch">TwitchTv</option>
                            </select>
                        </div>
                        <button className="btn btn-primary btn-fill">search</button>
                    </div>
                </div>
            </section>
        );
    }
}