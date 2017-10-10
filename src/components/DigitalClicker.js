// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {

  // timesClicked = 0
  constructor(){
    super();


    this.state = {   // setting state to persist
      timesClicked: 0
    }
  }

  clickInc = () => {
    this.setState({ timesClicked: this.state.timesClicked + 1 }) // updating prop in method to update state - for use as callback method for button click
  };


  render(){
    return (<div>
      <button onClick={this.clickInc}>{this.state.timesClicked}</button>
      </div>
  )}


}
