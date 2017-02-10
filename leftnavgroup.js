import React, { Component } from 'react';

export default class LeftNavGroup extends Component {
  constructor(props) {
    super (props);
    this.state = {
      collapse: false,
      itemSelected: undefined
    };
  }
  _onClickHandler() {
    this.setState({collapse: (!this.state.collapse)});
  }
  _onItemSelect(path) {
    this.props.handleLoadMenu(path);
    this.setState({
      itemSelected: path
    });
  }
  render () {
    let  collapseClass, selectedClass;
    if (this.state.collapse) {
      collapseClass = "sub-group expand-menu";
    }else {
      collapseClass = "sub-group";
    }

    let linkItems = this.props.items.map((item) => {
      if (this.state.itemSelected && (item.path === this.state.itemSelected)) {
        selectedClass = "sub-group-link child-selected";
      }else {
        selectedClass = "sub-group-link";
      }
      return (
          <li>
              <a className={selectedClass} onClick={this._onItemSelect.bind(this, item.path)}>{item.name}</a>
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
