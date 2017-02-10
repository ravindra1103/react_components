import React, { Component } from 'react';
import LeftNavGroup from './leftnavgroup';

export default class SideNavBar extends Component {
  constructor(props) {
    super (props);
    this.state = {
      displaySideBar: false
    };
    this._toggleSideBar = this._toggleSideBar.bind(this);
  }
  _toggleSideBar() {
    this.setState({
      displaySideBar: (!this.state.displaySideBar)
    });
  }
  render () {
    let styleForSideBar, styleForSideBarControl;
    if (this.state.displaySideBar) {
      styleForSideBar = { display: 'block' };
      styleForSideBarControl = { display: 'none'};
    }else {
      styleForSideBar = { display: 'none' };
      styleForSideBarControl = { display: 'block'};
    }
    return (
      <div>
        <div className="custom-left-nav" style={styleForSideBar} id="custom-left-nav">
          <ul className="custom-left-nav-list" id="leftNavList">
            <LeftNavGroup groupName={this.props.itemName} items={this.props.items} handleLoadMenu={this.props.handleLoadMenu}/>
          </ul>
          <div className="hideLeftNav" id="hideLeftNav" onClick={this._toggleSideBar}>
            {'<'}<span className="hideLeftNav-text">Hide Menu</span>
          </div>
        </div>
        <div className="showLeftNav" style={styleForSideBarControl} id="showLeftNav" onClick={this._toggleSideBar}>
          {'>'}<span className="showLeftNav-text">Show Menu</span>
        </div>
      </div>
    );
  }
}
SideNavBar.propTypes = {
  handleLoadMenu: React.PropTypes.func
};
