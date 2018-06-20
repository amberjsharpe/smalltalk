import React, { Component } from 'react';
import Eventheader from '../Eventheader';
import family from '../images/family.png';
import './events.css';

class Family extends Component {
    render(props) {
        return(
            <div>
                <Eventheader user={this.props.user} logout={this.props.logout}/>
                <div className="d-flex pl-3">
                    <div>
                        <img src={family} alt="family"/>
                    </div>
                    <div className="pt-3">
                        <h3>Family Gathering</h3>
                        <h6>SmallTalk</h6>
                    </div>
                </div>
            </div>
        )
    }
}

export default Family