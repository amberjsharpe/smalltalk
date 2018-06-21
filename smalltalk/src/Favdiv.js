import React, { Component } from 'react';
import { rebase } from './base';
import Openheart from './Openheart';
import Fullheart from './Fullheart';
import plus from './images/pluscircle.png';
import { SaveObjToFB, getFromFb, DeleteFromFB } from './events/db-interactions';

class Favdiv extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorites: [],
      isFavorited: false
    };

    this.favoriteSmallTalk = this.favoriteSmallTalk.bind(this);
    this.removeFavorite = this.removeFavorite.bind(this);
  }

  componentDidMount() {
    getFromFb('favorites').then(res => {
      const allFavs = res.map(i => i.id);

      this.setState({
        favorites: res,
        isFavorited: allFavs.includes(this.props.id)
      })
    })
  }

  removeFavorite() {
    const endpoint = 'favorites';
    const fbKey = this.state.favorites.filter(i => i.id === this.props.id).map(k => k.key);

    DeleteFromFB(endpoint, fbKey).then(res => {
      this.setState({
        isFavorited: false
      })
    })
  }

  favoriteSmallTalk() {
    const user = this.props.user.uid;
    const question = this.props.q;
    const smallTalkId = this.props.id;
    const heart = true;

    const obj = {
      id: smallTalkId,
      userUID: user,
      question: question,
      heart: heart
    }

    this.setState({
      isFavorited: true
    });

    SaveObjToFB('favorites', obj)
  }

  render() {
    // console.log(this.state);
    let isFavorited = this.state.isFavorited;
    let heart;

    if (isFavorited) {
      heart = <Fullheart removeFavorite={this.removeFavorite} SaveObjToFB={this.SaveObjToFB} props={this.props} />
    } else {
      heart = <Openheart favoriteSmallTalk={this.favoriteSmallTalk} SaveObjToFB={this.SaveObjToFB} props={this.props} />
    }

    return (
      <div className="backgroundTransparent pr-3 pb-2 pl-3 mt-3">
        <p className="pt-2">{this.props.q}</p>
        <div className="d-flex justify-content-between">
          <div>{heart}</div>
          <img className="plussignBtn" src={plus} alt="plus sign" />
        </div>
      </div>
    )
  }
}
export default Favdiv