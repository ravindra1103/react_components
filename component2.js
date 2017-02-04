import React, { Component } from 'react';
export default class Component2 extends Component {
  constructor(props) {
    super (props);
    this.state = {
      results: [
        {'sku_id': '12345678', 'data': 'value1'},
        {'sku_id': '12345679', 'data': 'value2'}
      ],
      selected: [],
      searchString: '',
      searchedItems : [],
      intitialLoad: true
    };
    this._handleFind = this._handleFind.bind(this);
    this._handleSeacrhText = this._handleSeacrhText.bind(this);
  }
  _checkIfItemExists(sku_id) {
    let { selected } = this.state;
    let found = false;
    selected.forEach((item) => {
      console.log("item.sku_id", item);
      console.log("sku_id", sku_id);
      if (item === sku_id) {
        found = true;
      }
    });
    return found;
  }
  _handleSeacrhText(e) {
    this.setState({
      searchString: e.target.value
    });
  }
  _isItemPresent(values, sku_id) {
    let found = false;
    values.forEach((item) => {
      if (item === sku_id) {
        found = true;
      }
    });
    return found;
  }
  _handleFind() {
    let { searchString } = this.state;
    let searchedItems = this.state.results.filter((item) => {
      let valuesArray = searchString.split(',');
      if (this._isItemPresent(valuesArray, item.sku_id)) {
        return item;
      }
    });
    this.setState({
      selected: [],
      intitialLoad: false,
      searchedItems: searchedItems
    });
  }
  _handleClick(sku_id) {
    let { selected } = this.state;
    if (this._checkIfItemExists(sku_id)) {
      let index = selected.indexOf(sku_id);
      if(index != -1) {
	     selected.splice(index, 1);
      }
    }else {
      selected.push(sku_id);
    }
    this.setState({
      selected: selected
    });
  }
  render () {
    let { results, selected, searchedItems, intitialLoad } = this.state;
    let items = undefined;
    let buttonControl = undefined;
    if (selected.length > 0) {
      buttonControl = <input type="button" value="Export" className="find-results-btn"/>;
    }else {
      buttonControl = <input type="button" disabled value="Export" className="find-results-btn"/>;
    }
    if (searchedItems.length > 0) {
      items = searchedItems.map((item) => {
        return (
          <div className="search-result" onClick={this._handleClick.bind(this, item.sku_id)}>
            {item.sku_id},{item.data}
          </div>
        );
      });
    } else if(intitialLoad) {
      items = results.map((item) => {
        return (
          <div className="search-result" onClick={this._handleClick.bind(this, item.sku_id)}>
            {item.sku_id},{item.data}
          </div>
        );
      });
    }else {
      items = (
        <div>No results found</div>
      );
    }
    return (
      <div className="center-content clearfix">
        <div className="search-section">
          <div className="search-input-section clearfix">
              <textarea rows="4" className="serach-text" placeholder="Search Key" value={this.state.searchString} onChange={this._handleSeacrhText}/>
              <input type="button" value="Find" className="find-results-btn" onClick={this._handleFind}/>
          </div>
          <hr className="results-seperator" />
          <h3 className="search-results-header">Search Results</h3>
          <div className="search-results-section" id="searchResults">
            {items}
          </div>
          <div className="export-csv-section clearfix">
            {buttonControl}
          </div>
        </div>
      </div>
    );
  }
}
