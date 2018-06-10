import React, { Component } from 'react';
import './categorybtn.css';
import party from './images/party.png';

class Categorybtn extends Component {
    render() {
        return(
            <div className="categorybtn boxShadow d-flex flex-column align-items-center">
                <img src={party} alt="party hat"/>
                <h3>Party</h3>
            </div>
        )
    }
}

export default Categorybtn