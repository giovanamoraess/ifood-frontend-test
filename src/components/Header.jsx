import React, { Component } from 'react';
import '../styles/Header.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <div className="header">
        <text className="name-app"> SpotiFood </text>
      </div>
    );
  }
}
