import React from 'react';
import Vote from '../Vote/Vote';

export default class Rating extends React.Component {

  // State "Model" Validators
  static propTypes = {
    // Props
  }

  render() {
    return (
      <div className="rating-container">
        <Vote />
      </div>
    );
  }
}
