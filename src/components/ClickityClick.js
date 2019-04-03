import React, { Component } from 'react';

export default class ClickityClick extends Component{
  constructor(props) {
    super(props);
    this.state = {
      hasBeenClicked: false
    } ;
  }

  handleClick = () =>{
    this.setState({hasBeenClicked: true})
  }

  render() {
    return (
      <div>
        <p>I have been {!this.state.hasBeenClicked ? 'not' : null} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
