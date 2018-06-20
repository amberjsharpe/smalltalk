import React, { Component } from 'react';
import Eventheader from '../Eventheader';
import Favdiv from '../Favdiv';
import coffee from '../images/coffee.png';
import './events.css';
import { getFromFb } from './db-interactions';

class Break extends Component {

    constructor(props) {
        super(props);

        this.state = {
            break: [],
            heart: false
        }
    }

    componentDidMount() {
        getFromFb('break').then(res => {
            console.log(res)
            this.setState({break: res});
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
                <div>
                    {this.state.break.map((b) => {
                        return <Favdiv key={b.id} q={b.q} user={this.props.user} id={b.id} />
                    })}
                </div>
            </div>
        )
    }
}

export default Break