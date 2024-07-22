import React from 'react';
import logo from './logo.svg';
import './App.css';

import Landing from './components/pages/Landing';
import Search from './components/Search';



// https://db.ygoprodeck.com/api/v7/cardinfo.php

function App() {

  const handleAPICall = async () => {
    const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php');
    const data = await response.json();
    console.log(data);
  }

  handleAPICall();

  return (
    <div className="App">
        <Landing />
        <Search />
        <div className='api-test'>
          <h1>API Test</h1>
        </div>
    </div>
  );
}

export default App;
