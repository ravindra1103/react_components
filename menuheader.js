import React, { Component } from 'react';

export default class MenuHeader extends Component {
  constructor(props) {
    super (props);
  }
  render () {
    return (
      <li className="no-dropdown"><a href="#">{this.props.name}</a></li>
    );
  }
}
