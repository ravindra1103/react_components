import React, { Component } from 'react';

export default class MenuItem extends Component {
  constructor(props) {
    super (props);
  }
  render () {
    return (
      <a href={this.props.path}>{this.props.name}</a>
    );
  }
}
