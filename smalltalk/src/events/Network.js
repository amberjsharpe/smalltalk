import React, { Component } from 'react';
import Header from '../Header';
import network from '../images/network.png';
import './events.css';

class Network extends Component {
    render(props) {
        return(
            <div>
                <Header user={this.props.user} logout={this.props.logout}/>
                <div className="d-flex pl-3">
                    <div>
                        <img src={network} alt="network"/>
                    </div>
                    <div className="pt-3">
                        <h3>Networking Event</h3>
                        <h6>SmallTalk</h6>
                    </div>
                </div>
            </div>
        )
    }
}

export default Network