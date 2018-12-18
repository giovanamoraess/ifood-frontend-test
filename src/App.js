import React, { Component } from 'react';
import './App.css';
import Authentication from './components/Authentication';

export default class App extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#000'}}>
        <Authentication />
      </div>
    );
  }
}
