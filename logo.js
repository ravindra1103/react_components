import React, { Component } from 'react';

export default class Logo extends Component {
  constructor(props) {
    super (props);
  }
  render () {
    return (
      <div className="logo">
        <img src="images/logo.png"/>
      </div>
    );
  }
}
