import React, { Component } from 'react';
import Eventheader from '../Eventheader';
import champagne from '../images/champagne.png';
import './events.css';

class Date extends Component {
    render(props) {
        return(
            <div>
                <Eventheader user={this.props.user} logout={this.props.logout}/>
                <div className="d-flex pl-3">
                    <div>
                        <img src={champagne} alt="champagne glasses clinking"/>
                    </div>
                    <div className="pt-3">
                        <h2>Date</h2>
                        <h6>SmallTalk</h6>
                    </div>
                </div>
            </div>
        )
    }
}

export default Date