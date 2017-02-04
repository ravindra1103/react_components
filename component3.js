import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Modal from 'react-modal';

var products = [{
  id: 1,
  name: "Product1",
  price: 120
},
{
  id: 2,
  name: "Product2",
  price: 80
}];

export default class Component3 extends Component {
  constructor(props) {
    super (props);
    this.state = {
      modalIsOpen : false,
      rowId: undefined
    };
    this.idFormatter = this.idFormatter.bind(this);
    this.editSecurityPolicy = this.editSecurityPolicy.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  editSecurityPolicy(cell, row) {
    console.log("Cell", cell, row);
    this.setState({
      modalIsOpen: true,
      rowId: row.id
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
      rowId: undefined
    });
  }

  idFormatter(cell, row) {
    return  <i title="Edit this entry" onClick={() => this.editSecurityPolicy(cell, row)}>{row.id}</i>;
  }

  render () {
    console.log("this.state.modalOpen", this.state.modalIsOpen);
    console.log("this.state.rowId", this.state.rowId);
    let modal = (              <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                  >
                    <button onClick={this.closeModal}>close</button>
                  </Modal>);
    return (
      <div>
        <BootstrapTable data={products} striped hover >
              <TableHeaderColumn isKey dataField='id' dataFormat={this.idFormatter}>Product ID</TableHeaderColumn>
              <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
              <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
          </BootstrapTable>
          {modal}
      </div>
    );
  }
}
