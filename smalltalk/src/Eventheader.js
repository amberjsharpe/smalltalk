import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import User from './User';
import back from './images/backarrow.png';
import './logo.css';
import './button.css';
import './user.css';

class Eventheader extends Component {


    render(props) {
        return(
            <div className="pt-4 pr-4 pl-4">
                <header className="d-flex justify-content-between header">
                    <NavLink to="/events"><img src={back} alt="logo"/></NavLink>
                    <div>
                    <NavLink to="/user"><img className="userHeader" src={this.props.user.photoURL} alt="user"/></NavLink>
                    <h5 onClick={this.props.logout} className="pl-2">LOGOUT</h5>
                    </div>
                </header>
                <Switch>
                    <Route exact path="/user" component={() => <User />} />
                </Switch>
            </div>
        )
    }
}

export default Eventheader
