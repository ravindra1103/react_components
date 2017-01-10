import React from 'react';
import ReactDOM from 'react-dom';

import MyPage from './mypage';
import Component1 from './component1';
import Component2 from './component2';
import { Router, Route, browserHistory } from 'react-router';

const app = document.getElementById('app');
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={MyPage}>
      <Route path="/component1" component={Component1}/>
      <Route path="/component2" component={Component2}/>
    </Route>
  </Router>
 , app);
