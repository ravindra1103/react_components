import React, { Component } from 'react';

export default class RightHeader extends Component {
  constructor(props) {
    super (props);
  }
  render () {
    return (
      <div className="header-right-section">
        {this.props.children}
      </div>
    );
  }
}
