import React, { Component } from 'react';
import './Chunk.css';

class Chunk extends Component {
  render() {
    if (false) {
      return (
        <div className="Checkoff-complete">
          <p><b>Checkoff #{this.props.number}</b> ({this.props.checkoffID})</p>
          <p>Great job! You have completed this checkoff.</p>
        </div>
      );
    } else {
      return (
        <div className="Checkoff-incomplete">
          <p><b>Checkoff #{this.props.number}</b> ({this.props.checkoffID})</p>
          <p>To move onto the next part, you must get a checkoff from your
            mentor. If you are waiting for your checkoff, see if anyone in your
            group needs help. If not, try to learn something new about your
            teammates!</p>
        </div>
      );
    }
  }
}

export default Chunk;
