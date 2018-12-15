import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ListsPlaylists from './components/ListsPlaylists';
import Filters from './components/Filters';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Filters />
        <ListsPlaylists />
      </div>
    );
  }
}
