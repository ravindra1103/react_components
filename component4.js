import React, { Component } from 'react';
import Modal from 'react-modal';

export default class Component4 extends Component {
  constructor(props) {
    super (props);
    this.state = {
      modalIsOpen: false,
      csvData: undefined
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.loadHandler = this.loadHandler.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  _onSubmit() {
    let input = document.querySelector('input[type="file"]');
    this._getAsText(input.files[0]);
  }
  _getAsText(fileToRead) {
    var reader = new FileReader();
        // Read file into memory as UTF-8
    reader.readAsText(fileToRead);
    reader.onload = this.loadHandler;
  }
  loadHandler(event) {
    var csv = event.target.result;
    var allTextLines = csv.split(/\r\n|\n/);
    var lines = [];
    for (var i=0; i<allTextLines.length; i++) {
      var data = allTextLines[i].split(';');
      var tarr;
      for (var j=0; j<data.length; j++) {
        tarr = data[j];
      }
      lines.push(tarr);
    }
    this.setState({
      csvData: this._parseFileDataToJson(lines)
    });
  }
  _parseFileDataToJson(lines) {
    var result = [];
	  var headers=lines[0].split(",");
	  for(var i=1;i<lines.length;i++){
		  var obj = {};
		  var currentline=lines[i].split(",");
		  for(var j=0;j<headers.length;j++){
			  obj[headers[j]] = currentline[j];
		  }
		  result.push(obj);
	  }
	  //return result; //JavaScript object
	  return JSON.stringify(result); //JSON

  }
  render () {
    console.log("this.state.csvData", this.state.csvData);
    return (
      <div>
              <input ref="file" id="file" name="file" type="file" accept=".csv"/>
              <button onClick={this._onSubmit.bind(this)}>Import</button>
              <button onClick={this.openModal}>Open Modal</button>
              <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                contentLabel="Example Modal"
              >

                <h2 ref="subtitle">Hello</h2>
                <button onClick={this.closeModal}>close</button>
                <div>I am a modal</div>
                <form>
                  <input />
                  <button>tab navigation</button>
                  <button>stays</button>
                  <button>inside</button>
                  <button>the modal</button>
                </form>
              </Modal>
            </div>
    );
  }
}
