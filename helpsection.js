import React, { Component } from 'react';

export default class HelpSection extends Component {
  constructor(props) {
    super (props);
  }
  render () {
    return (
      <div className="help-secton">
        <a href="#"><img className="header-help" src="images/help.png" /></a>
      </div>
    );
  }
}
