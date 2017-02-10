import React from 'react';
import ReactDOM from 'react-dom';

import MyPage from './mypage';
import Component1 from './component1';
import Component2 from './component2';
import Component3 from './component3';
import Component4 from './component4';
import Component5 from './component5';
import Component6 from './component6';
import Component7 from './component7';

import Login from './Login';
import { Route, browserHistory, Router } from 'react-router';

const app = document.getElementById('app');
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={MyPage}>
      <Route path="/component1" component={Component1}/>
      <Route path="/component2" component={Component2}/>
      <Route path="/component3" component={Component3}/>
      <Route path="/component4" component={Component4}/>
      <Route path="/component5" component={Component5}/>
      <Route path="/component6" component={Component6}/>
      <Route path="/component7" component={Component7}/>
    </Route>
    <Route path="/login" component={Login}/>
  </Router>
 , app);
