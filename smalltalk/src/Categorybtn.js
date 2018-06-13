import React, { Component } from 'react';
import './categorybtn.css';

class Categorybtn extends Component {

    render(props) {
        return(
            <div className="mb-4 categorybtn boxShadow d-flex flex-column align-items-center">
                <img src={this.props.src} alt={this.props.alt}/>
                <h4>{this.props.category}</h4>
            </div>
        )
    }
}

export default Categorybtn