import React from 'react';
import logo from './logo.svg';
import './App.css';

import Landing from './components/pages/Landing';

// https://db.ygoprodeck.com/api/v7/cardinfo.php

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='nav'></div>
      </header>
        <Landing />
    </div>
  );
}

export default App;
