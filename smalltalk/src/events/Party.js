import React, { Component } from 'react';
import Header from '../Header';
import party from '../images/party.png';
import './events.css';

class Party extends Component {
    render(props) {
        return(
            <div>
                {console.log(this.props)}
                <Header user={this.props.user} logout={this.props.logout}/>
                <div className="d-flex">
                    <div>
                        <img src={party} alt="party hat"/>
                    </div>
                    <div className="pt-3">
                        <h2>Party</h2>
                        <h6>SmallTalk</h6>
                    </div>
                </div>
            </div>
        )
    }
}

export default Party