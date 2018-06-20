import React, { Component } from 'react';
import Eventheader from '../Eventheader';
import Favdiv from '../Favdiv';
import champagne from '../images/champagne.png';
import './events.css';
import { getFromFb } from './db-interactions';

class Date extends Component {

    constructor(props) {
        super(props);

        this.state = {
            date: [],
            heart: false
        }
    }

    componentDidMount() {
        getFromFb('date').then(res => {
            console.log(res)
            this.setState({date: res});
        })
    }

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
                <div>
                    {this.state.date.map((d) => {
                        return <Favdiv key={d.id} q={d.q} user={this.props.user} id={d.id} />
                    })}
                </div>
            </div>
        )
    }
}

export default Date