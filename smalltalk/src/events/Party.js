import React, { Component } from 'react';
import { rebase }  from '../base';
import Header from '../Header';
import Favdiv from '../Favdiv';
import party from '../images/party.png';
import './events.css';

class Party extends Component {
    constructor(props) {
        super(props);

        this.state = {
            party: []
        }
    }

    componentDidMount() {
        this.getFromFb('party').then(res => {
            console.log(res);
            this.setState({party: res});
        })
    }

    getFromFb(endpoint){

        return rebase.fetch(endpoint, {
            context: this,
            asArray: true, 
            then(data) {
                let myObj = JSON.stringify(data);
                return myObj;
            }
        })
    }

    render(props) {
        return(
            <div className="d-flex flex-column">
                <Header user={this.props.user} logout={this.props.logout}/>
                <div>
                    <div className="d-flex pl-3">
                        <div>
                            <img src={party} alt="party hat"/>
                        </div>
                        <div className="pt-3">
                            <h2>Party</h2>
                            <h6>SmallTalk</h6>
                        </div>
                </div>    
                    <div>
                        {this.state.party.map((p, i ) => {
                            console.log(p.id)
                            return <div><Favdiv key={p.id} q={p.q} user={this.props.user} id={p.id} /></div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Party