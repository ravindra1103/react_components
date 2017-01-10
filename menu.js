import React, { Component } from 'react';

export default class Menu extends Component {
  constructor(props) {
    super (props);
  }
  render () {
    return (
      <li className="dropdown">
        <a onClick={this.props.onClick} className="dropbtn">{this.props.title}</a>
        <div className="dropdown-content">
          {this.props.children}
        </div>
      </li>
    );
  }
}
