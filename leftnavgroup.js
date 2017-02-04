import React, { Component } from 'react';

export default class LeftNavGroup extends Component {
  constructor(props) {
    super (props);
    this.state = {
      collapse: false
    };
  }
  _onClickHandler() {
    this.setState({collapse: (!this.state.collapse)});
  }
  _onItemSelect(path) {
    this.props.handleLoadMenu(path);
  }
  render () {
    let  collapseClass;
    if (this.state.collapse) {
      collapseClass = "sub-group expand-menu";
    }else {
      collapseClass = "sub-group";
    }
    let linkItems = this.props.items.map((item) => {
      return (
          <li>
              <a className="sub-group-link" onClick={this._onItemSelect.bind(this, item.path)}>{item.name}</a>
          </li>
      );
    });
    return (
      <li>
        <a className={collapseClass} onClick={this._onClickHandler.bind(this)}>{this.props.groupName}<span className="expand-plus"><img src="images/expand-arrow.png" /></span>
        <span className="collapse-minus"><img src="images/collapse-arrow.png" /></span></a>
        <ul className="custom-left-nav-child-list" style={{display: 'none'}}>
          {linkItems}
        </ul>
      </li>
    );
  }
}

LeftNavGroup.propTypes = {
  handleLoadMenu: React.PropTypes.func
};
