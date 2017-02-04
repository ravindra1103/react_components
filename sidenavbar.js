import React, { Component } from 'react';
import LeftNavGroup from './leftnavgroup';

export default class SideNavBar extends Component {
  constructor(props) {
    super (props);
  }
  render () {
    console.log("render sidebar");
    return (
      <div className="custom-left-nav">
        <ul className="custom-left-nav-list" id="leftNavList">
          <LeftNavGroup groupName={this.props.itemName} items={this.props.items} handleLoadMenu={this.props.handleLoadMenu}/>
        </ul>
      </div>
    );
  }
}
SideNavBar.propTypes = {
  handleLoadMenu: React.PropTypes.func
};
