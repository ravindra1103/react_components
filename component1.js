import React, { Component } from 'react';
import _ from 'lodash';

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
    let requests = [
       {
          "requestId":546,
          "requestStatus":{
             "requestStatusId":1,
             "title":"Scheduled",
             "description":"Scheduled"
          }
       },
       {
          "requestId":545,
          "requestStatus":{
             "requestStatusId":2,
             "title":"Scheduled",
             "description":"Scheduled"
          }
       },
       {
          "requestId":170,
          "requestStatus":{
             "requestStatusId":3,
             "title":"Scheduled",
             "description":"Scheduled"
          }
       }
    ];
    var id1 = 2;
    var id2 = 3;
    var ids = [2,3];
    let newValues = _.filter(requests, ['requestStatus.requestStatusId',  2]);
    console.log("newValues", newValues);
    let newValues2 = _.filter(requests,
        function(request) {
          var requestsFound = _.filter(ids,
            function(o) {
              return o === request.requestStatus.requestStatusId;
            });
          return (requestsFound.length > 0);
        });
    console.log("newValues3", newValues2);
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
