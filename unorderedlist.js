import React, { Component } from 'react';

export default class UnorderedList extends Component {
  constructor(props) {
    super (props);
  }
  render () {
    return (
       <ul className="header-menu clearfix">
        {this.props.children}
      </ul>
    );
  }
}
