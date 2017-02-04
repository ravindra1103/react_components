import React, { Component } from 'react';

export default class Component1 extends Component {
  constructor(props) {
    super (props);
    this.state = {
      totalBalance:5000,
      transactions: {
        '8/21' : [{
          'name' : 'test1',
          'amount' : 1000
        },
        {
          'name' : 'test2',
          'amount' : 100
        }],
        '8/22' : [{
          'name' : 'test3',
          'amount' : 1002
        },
        {
          'name' : 'test4',
          'amount' : 102
        }]
      }
    };
  }
  render () {
    var {transactions} = this.state;
    var wishList =
      {
        1 :  {listName: 'test list1', productsList: [{id: 1, productName: 'iphone6'}]},
        2 :  {listName: 'test list2', productsList: [{id: 1, productName: 'iphone7'}]}
      };
    console.log("wishList1", wishList);
    let newList = {...wishList, 1 : {listName: 'test list1', productsList: [{id: 1, productName: 'iphone10'}]}};
    console.log("wishList2", newList);
    var rowItems = [];
    for(var key in transactions) {
      for (var i = 0; i < transactions[key].length; i++) {
        var item = undefined;
        if (i === 0) {
          item =  (<tr>
                      <th rowSpan={transactions[key].length}>{key}</th>
                      <td>{transactions[key][i].name}</td>
                      <td>{transactions[key][i].amount}</td>
                    </tr>);

        }else {
          item =  (<tr>
                    <td>{transactions[key][i].name}</td>
                    <td>{transactions[key][i].amount}</td>
                    </tr>);
        }
        rowItems.push(item);
      }
    }
    var lastRow = (<tr>
              <td>Balance</td>
              <td/>
              <td>{this.state.totalBalance}</td>
              </tr>);
    rowItems.push(lastRow);
    return (
      <div>
        <table>
          <tr>
            <th>Date:</th>
            <td>Name</td>
            <td>Amount</td>
          </tr>
        </table>

      </div>
    );
  }
}
