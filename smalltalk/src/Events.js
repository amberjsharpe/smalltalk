import React, { Component } from 'react';
import Header from './Header';
import Categorybtn from './Categorybtn';
import party from './images/party.png';

class Events extends Component {
    render() {
        return(
            <div>
                <Header />
                <h3 className="pt-4 pl-3 pb-4">Where are you going?</h3>
                <Categorybtn src={party} alt="party hat" category="Party"/>
            </div>
        )
    }
}

export default Events