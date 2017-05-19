import React, { Component } from 'react';
import Chunk from '../components/Chunk.jsx';
import '../views/tutorial.css';

class BallBounce extends Component {
  render() {
    return (
      <div className="Tutorial-container">
        <h1>Ball Bounce</h1>
        <div className="Tutorial-text">
          <h2>Learning Objectives</h2>
          <p>Students should be able to...</p>
          <ul>
            <li>Differentiate between the Designer View and the Blocks View</li>
            <li>Explain what the Canvas component is used for</li>
            <li>Explain when to use Event Handlers and identify examples of
              Event Handlers</li>
          </ul>
        </div>
        <div className="Tutorial-text">
          <h2>Step 1. Create a new project called BallBounce</h2>
          <h2>Step 2. Add a Canvas</h2>
          <ul>
            <li>The <b>Designer View</b> shows you what the app looks like to
            the user.</li>
            <li>Notice the <b>Palette</b> on the lefthand side.</li>
            <li>Open the <b>Drawing and Animation</b> drawer and drag a <b>Canvas
              component</b> onto the viewer.</li>
            <li>Look at the two other panels (<b>Components</b> and <b>Properties</b>)
              in the Designer View. Can you figure out what they are used for?</li>
          </ul>
          <div className="Challenge-container">
            <p className="Challenge-title">Challenges:</p>
            <ol>
              <li>Turn off the Scrollable setting of the Screen.</li>
              <li>Change the height and width of the canvas to fill parent.</li>
            </ol>
          </div>
          <Chunk number="1" checkoffID="ball-bounce-1" />
        </div>
      </div>
    )
  }
}

export default BallBounce;
