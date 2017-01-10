import React, { Component } from 'react';

export default class SideNavBar extends Component {
  constructor(props) {
    super (props);
  }
  render () {
    let arrow = undefined;
    if (this.props.minimize) {
      arrow = <img src="images/right-arrow.png" />;
    }else {
      arrow = <img src="images/left-arrow.png" />;
    }
    return (
      <div className="left-nav" id="leftNav">
        <div className="left-nav-links">
          {this.props.children}
        </div>
        <div className="left-close-section">
          <span className="collapse-arrows" onClick={this.props.onToggle}>
            {arrow}
          </span>
        </div>
      </div>
    );
  }
}
