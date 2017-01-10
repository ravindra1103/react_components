import React, { Component } from 'react';

export default class LeftNavLink extends Component {
  constructor(props) {
    super (props);
  }
  render () {
    let linkContent = undefined;
    let imageContent = undefined;
    if(this.props.minimize) {
      imageContent = <img className="link-image link-adjust" src="images/user.png"/>;
    }else {
      imageContent = <img className="link-image" src="images/user.png"/>;
      linkContent = (
          <span className="link-text">
            {this.props.name}
          </span>
      );
    }
    return (
      <div className="left-link">
        <a onClick={this.props.onClick}>
            {imageContent}
            {linkContent}
        </a>
    </div>
    );
  }
}
