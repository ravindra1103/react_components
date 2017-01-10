import React, { Component } from 'react';

export default class HeaderButton extends Component {
  constructor(props) {
    super (props);
  }
  render () {
    return (
      <li className="create-link">
        <a id="create_link" className="header-button" onClick={this.props.onClick}>{this.props.children}</a>
     </li>
    );
  }
}
