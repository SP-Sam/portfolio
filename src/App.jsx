import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';

export default class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    )
  }
}
