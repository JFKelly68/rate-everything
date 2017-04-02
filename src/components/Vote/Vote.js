import React from 'react';

import { vote } from '../../actions';


export default class Vote extends React.Component {
  static defaultProps = {
    uid: null,
    item: {
      _id: 0,
      name: 'Test Item',
      rating: 0,
      image: '//placehold.it/200x120'
    },
    votes: []
  }

  // State "Model" Validators
  static propTypes = {
    // Props
    userId: React.PropTypes.string,
    item: React.PropTypes.object.isRequired,
    votes: React.PropTypes.array.isRequired,
    // "Methods"
    vote: React.PropTypes.func.isRequired
  }

  upvote = () => this.props.vote("UP", this.props.item._id, this.props.userId);
  downvote = () => this.props.vote("DOWN", this.props.item._id, this.props.userId);

  render() {
    return (
      <div className="voting-container">
        <div className="vote-btn vote-btn--up" onClick={this.upvote}>+1</div>
        <div className="item-container">
          <img src={this.props.item.image} alt />
          <p className="item">{this.props.item.name}</p>
        </div>
        <div className="vote-btn vote-btn--down" onClick={this.downvote}>-1</div>
      </div>
    );
    // <div className="slider-nav complete" onClick={this.complete}>Next&gt;</div>
  }
}
