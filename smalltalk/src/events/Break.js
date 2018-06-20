import React, { Component } from 'react';
import Eventheader from '../Eventheader';
import coffee from '../images/coffee.png';
import './events.css';
import { getFromFb } from './db-interactions';

class Break extends Component {

    componentDidMount() {
        getFromFb('break').then(res => {
            console.log(res)
        })
    }

    render(props) {
        return(
            <div>
                <Eventheader user={this.props.user} logout={this.props.logout}/>
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