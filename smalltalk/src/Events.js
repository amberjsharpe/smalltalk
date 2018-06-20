import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Categorybtn from './Categorybtn';
import party from './images/party.png';
import champagne from './images/champagne.png';
import coffee from './images/coffee.png';
import family from './images/family.png';
import network from './images/network.png';
import train from './images/train.png';

class Events extends Component {
    render(props) {
        return(
            <div>
                <Header user={this.props.user} logout={this.props.logout}/>
                <div className="d-flex flex-column align-items-center">
                    <h3 className="pt-3 pb-3">Where are you going?</h3>
                    <div className="d-flex flex-wrap justify-content-around">
                        <Link to="/events/party">
                            <Categorybtn src={party} alt="party hat" category="Party"  />
                        </Link>
                        <Link to="/events/network">
                            <Categorybtn src={network} alt="circles connected by lines" category="Networking"/>
                        </Link>
                        <Link to="/events/date">
                            <Categorybtn src={champagne} alt="champagne" category="Date"/>
                        </Link>
                        <Link to="/events/family">
                            <Categorybtn src={family} alt="family" category="Family Gathering"/>
                        </Link>
                        <Link to="/events/break">
                            <Categorybtn src={coffee} alt="coffee pot" category="Break Room"/>
                        </Link>
                        <Link to="/events/commute">
                            <Categorybtn src={train} alt="light rail train" category="Morning Commute"/>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Events