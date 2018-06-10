import React, { Component } from 'react';
import './categorybtn.css';

class Categorybtn extends Component {
    render(props) {
        return(
            <div className="categorybtn boxShadow d-flex flex-column align-items-center">
                <img src={this.props.src} alt={this.props.alt}/>
                <h3>{this.props.category}</h3>
            </div>
        )
    }
}

export default Categorybtn