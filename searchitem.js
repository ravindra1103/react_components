import React, { Component } from 'react';

export default class SearchItem extends Component {
  constructor(props) {
    super (props);
  }
  render () {
    return (
      <input className="header-search" type="text" placeholder="Search" />
    );
  }
}
