import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div classNameName="login-page">
        <div className="form">
          <form className="login-form">
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <button>login</button>
          </form>
        </div>
      </div>
    );
  }
}
