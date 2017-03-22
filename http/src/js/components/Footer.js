/**
 * Created by Neil on 2017/3/22.
 */
import React from 'react'

export default function Footer(props) {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 overview">
                        <p>crossgate.me</p>
                        <p>
                            crossgate.me is your ultimate live stream websites subscription terminal.
                            It allows your to subscribe unlimited streamers from different live stream
                            platform. With subscription, you could check out whether or not the channel
                            is on live, watch number, and streamer.
                        </p>
                    </div>
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-3 links">
                        <p>links:</p>
                        <ul>
                            <li><a target="_blank" href="https://www.douyu.com">DouyuTv</a></li>
                            <li><a target="_blank" href="http://www.panda.tv">PandaTv</a></li>
                            <li><a target="_blank" href="https://www.twitch.tv">TwitchTv</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row copyright">
                    <div className="col-md-12">
                        <p> copyright@crossgate.me</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}