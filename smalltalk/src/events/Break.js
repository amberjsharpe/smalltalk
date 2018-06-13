import React, { Component } from 'react';
import Header from '../Header';
import coffee from '../images/coffee.png';
import './events.css';

class Break extends Component {
    render(props) {
        return(
            <div>
                <Header user={this.props.user} logout={this.props.logout}/>
                <div className="d-flex pl-3">
                    <div>
                        <img src={coffee} alt="coffee pot"/>
                    </div>
                    <div className="pt-3">
                        <h2>Break Room</h2>
                        <h6>SmallTalk</h6>
                    </div>
                </div>
            </div>
        )
    }
}

export default Break