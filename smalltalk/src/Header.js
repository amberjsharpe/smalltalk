import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import User from './User';
import logo from './images/whitespeech.png';
import './logo.css';
import './button.css';
import './user.css';

class Header extends Component {


    render(props) {
        console.log(this.props)
        return(
            <div className="pt-4 pr-4 pl-4">
                <header className="d-flex justify-content-between header">
                    <NavLink to="/user"><img src={logo} alt="logo"/></NavLink>
                    <div>
                    <NavLink to="/user"><img className="userHeader" src={this.props.user.photoURL} alt="user"/></NavLink>
                    <h5 onClick={this.props.logout} className="pl-2">LOGOUT</h5>
                    </div>
                </header>
                <Switch>
                    <Route exact path="/user" component={() => <User />} />
                    <Route exact path="/user" component={() => <User />} />
                </Switch>
            </div>
        )
    }
}

export default Header
