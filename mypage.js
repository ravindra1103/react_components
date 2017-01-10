import React, { Component } from 'react';
import Logo from './logo';
import Menu from './menu';
import HeaderButton from './headerbutton';
import UnorderedList from './unorderedlist';
import Header from './header';
import SideNavBar from './sidenavbar';
import LeftNavLink from './leftnavlink';
import MainSection from './mainsection';
import { browserHistory } from 'react-router';
import { menuItems } from './menuItems';

export default class MyPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      minimizeNavigation: true,
      itemName: menuItems[0].name
    };
    this._toggleNavigationBar = this._toggleNavigationBar.bind(this);
  }
  _toggleNavigationBar() {
    let { minimizeNavigation } = this.state;
    this.setState({ minimizeNavigation: !minimizeNavigation });
  }
  _handleConentLoad(path) {
    browserHistory.push(path);
  }
  _handleMenuItemSelected(itemName) {
    this.setState({
      itemName: itemName
    });
    let sideNavItems = undefined;
    menuItems.forEach((item) => {
      if(itemName === item.name) {
        sideNavItems = item.sideNavItems;
      }
    });
    console.log("sideNavItems", sideNavItems[0].path);
    browserHistory.push(sideNavItems[0].path);
  }
  _renderMenu() {
    let items = menuItems.map((item) => {
      return <Menu title={item.name} onClick={this._handleMenuItemSelected.bind(this, item.name)}/>;
    });
    return items;
  }
  _renderSideBar(itemName, minimizeNavigation) {
    let sideNavItems = undefined;
    menuItems.forEach((item) => {
      if(itemName === item.name) {
        sideNavItems = item.sideNavItems;
      }
    });
    let sidebarItems = sideNavItems.map((item) => {
      return (<LeftNavLink onClick={this._handleConentLoad.bind(this, item.path)} name={item.name} minimize={minimizeNavigation}/>);
    });
    let sidebar = (
      <SideNavBar onToggle={this._toggleNavigationBar} minimize={this.state.minimizeNavigation}>
        {sidebarItems}
      </SideNavBar>
    );
    return sidebar;
  }
  render() {
    let { minimizeNavigation } = this.state;
    let menuItems = this._renderMenu();
    let sidebar = this._renderSideBar(this.state.itemName, minimizeNavigation);
    return (
      <div>
        <Header>
          <Logo/>
          <UnorderedList>
            {menuItems}
            <HeaderButton onClick="">Create</HeaderButton>
          </UnorderedList>
      </Header>
      <MainSection>
        {sidebar}
        {this.props.children}
      </MainSection>
      </div>
    );
  }
}
