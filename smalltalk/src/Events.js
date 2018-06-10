import React, { Component } from 'react';
import Header from './Header';
import Categorybtn from './Categorybtn';

class Events extends Component {
    render() {
        return(
            <div>
                <Header />
                <h3 className="pt-4 pl-3">Where are you going?</h3>
                <Categorybtn />
            </div>
        )
    }
}

export default Events