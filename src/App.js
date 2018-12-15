import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ListsPlaylists from './components/ListsPlaylists';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ListsPlaylists />
      </div>
    );
  }
}
