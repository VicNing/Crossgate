/**
 * Created by Neil on 2017/2/3.
 */
import React from 'react'

export default class SearchResult extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
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
                    <tr>
                        <td className="text-center">
                            <input id="box1" type="checkbox"/>
                            <label className="custom-checkbox" htmlFor="box1"/>
                        </td>
                        <td>余生不过两万天</td>
                        <td>MrQuin</td>
                        <td><span className="label label-success">streaming</span></td>
                        <td className="text-center">DouyuTv</td>
                        <td className="text-center">1188</td>
                    </tr>
                    <tr>
                        <td className="text-center">
                            <input id="box2" type="checkbox"/>
                            <label className="custom-checkbox" htmlFor="box2"/>
                        </td>
                        <td>红包走起</td>
                        <td>PIGFF</td>
                        <td><span className="label label-default">offline</span></td>
                        <td className="text-center">DouyuTv</td>
                        <td className="text-center">254301</td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                        <td colSpan="5"/>
                        <td className="text-center"> <button type="button" className="btn btn-primary btn-fill btn-l">Add to list&nbsp;<i className="fa fa-chevron-right"/></button></td>
                    </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}