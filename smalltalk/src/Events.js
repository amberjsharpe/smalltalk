import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Header from './Header';
import Categorybtn from './Categorybtn';
import party from './images/party.png';
import champagne from './images/champagne.png';
import coffee from './images/coffee.png';
import family from './images/family.png';
import network from './images/network.png';
import train from './images/train.png';
import Party from './events/Party';
import Network from './events/Network';
import Family from './events/Family';
import Date from './events/Date';
import Commute from './events/Commute';
import Break from './events/Break';

class Events extends Component {


    render(props) {
        return(
            <div>
                <Party user={this.props.user} logout={this.props.logout}/>
                {/* <Header user={this.props.user} logout={this.props.logout}/>
                <div className="d-flex flex-column align-items-center">
                    <h3 className="pt-3 pb-3">Where are you going?</h3>
                    <div className="d-flex flex-wrap justify-content-around">
                        <Categorybtn src={party} alt="party hat" category="Party"/>
                        <Categorybtn src={network} alt="circles connected by lines" category="Networking Event"/>
                        <Categorybtn src={champagne} alt="champagne" category="Date"/>
                        <Categorybtn src={family} alt="family" category="Family Gathering"/>
                        <Categorybtn src={coffee} alt="coffee pot" category="Break Room"/>
                        <Categorybtn src={train} alt="light rail train" category="Morning Commute"/>
                    </div>
                    <button className="mediumBtn backgroundYellow boxShadow">
                        <strong>SUBMIT</strong>
                    </button>
                </div> */}
            </div>
        )
    }
}

export default Events