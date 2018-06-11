import React, { Component } from 'react';
import Header from './Header';
import Categorybtn from './Categorybtn';
import party from './images/party.png';
import champagne from './images/champagne.png';
import coffee from './images/coffee.png';
import family from './images/family.png';
import network from './images/network.png';
import train from './images/train.png';

class Events extends Component {
    render() {
        return(
            <div>
                <Header />
                <h3 className="pt-4 pl-3 pb-4">Where are you going?</h3>
                <div className="pr-1 pl-1 d-flex flex-wrap justify-content-around">
                    <Categorybtn src={party} alt="party hat" category="Party"/>
                    <Categorybtn src={network} alt="circles connected by lines" category="Networking Event"/>
                    <Categorybtn src={champagne} alt="champagne" category="Date"/>
                    <Categorybtn src={family} alt="family" category="Family Gathering"/>
                    <Categorybtn src={coffee} alt="coffee pot" category="Break Room"/>
                    <Categorybtn src={train} alt="light rail train" category="Morning Commute"/>
                </div>
            </div>
        )
    }
}

export default Events