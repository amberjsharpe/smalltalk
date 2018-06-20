import React, { Component } from 'react';
import Eventheader from '../Eventheader';
import train from '../images/train.png';
import './events.css';

class Commute extends Component {
    render(props) {
        return(
            <div>
                <Eventheader user={this.props.user} logout={this.props.logout}/>
                <div className="d-flex pl-3">
                    <div>
                        <img src={train} alt="train"/>
                    </div>
                    <div className="pt-3">
                        <h2>Commute</h2>
                        <h6>SmallTalk</h6>
                    </div>
                </div>
            </div>
        )
    }
}

export default Commute