import React, { Component } from 'react';
import { rebase }  from './base';
import Header from './Header';
import plus from './images/pluscircle.png';
import deletebtn from './images/delete.png';
import './button.css';

class Favorites extends Component {

   constructor(props) {
       super(props);

       this.state = {
           favorites: ''
        }
   }

    GetFromFB (endpoint){
        console.log('Getting Stuff from FB:', endpoint);
        return rebase.fetch(endpoint, {
          context: this,
          asArray: true 
        }).then(data => {
                // let myObj = JSON.stringify(data)
                this.setState({favorites:data})
                console.log(this.state)
            })
      }

      componentDidMount() {
          this.GetFromFB('favorites');
      }

    render(props) {
        const favs = this.state.favorites;

        if (!favs) {
            return <div></div>;
        }
      
        return(
            <div>
                <Header user={this.props.user} logout={this.props.logout}/>
                <button className="mt-3 mb-3 longBtn backgroundRed">
                    <h2>FAVORITES</h2>
                </button>
                {favs.map((f, i) => {
                    return <div key={i} className="backgroundTransparent pr-3 pb-2 pl-3 mt-3">
                        <p className="pt-2">{f.question}</p>
                        <div className="d-flex justify-content-between">
                            <img className="plussignBtn" src={plus} alt="plus sign" />
                            <img className="deleteBtn" src={deletebtn} alt="delete" />
                        </div>
                    </div>
                })}
                
            </div>
        )
    }
}

export default Favorites