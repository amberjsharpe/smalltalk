import React, { Component } from 'react';
import Eventheader from '../Eventheader';
import Favdiv from '../Favdiv';
import family from '../images/family.png';
import './events.css';
import { getFromFb } from './db-interactions';

class Family extends Component {

    constructor(props) {
        super(props);

        this.state = {
            family: [],
            heart: false
        }
    }

    componentDidMount() {
        getFromFb('family').then(res => {
            console.log(res)
            this.setState({family: res});
        })
    }

    render(props) {
        return(
            <div>
                <Eventheader user={this.props.user} logout={this.props.logout}/>
                <div className="d-flex pl-3">
                    <div>
                        <img src={family} alt="family"/>
                    </div>
                    <div className="pt-3">
                        <h3>Family Gathering</h3>
                        <h6>SmallTalk</h6>
                    </div>
                </div>
                {this.state.family.map((f) => {
                    return <Favdiv key={f.id} q={f.q} user={this.props.user} id={f.id} />
                })}
            </div>
        )
    }
}

export default Family