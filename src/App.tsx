import React from 'react';
import './App.css';

import bg from './components/resources/imgs/abstract_0102-01.svg'

import Nav from './components/Nav'
import Landing from './components/pages/Landing';
import Search from './components/Search';



// https://db.ygoprodeck.com/api/v7/cardinfo.php

function App() {

  const [currentPage, setCurrentPage] = React.useState('landing');

  return (

    <div className="App flex bg-gradient-to-t from-purple-500 to-indigo-900">
        <img src='./components/resources/imgs/abstract_0102-01.svg'></img>
        <Landing />
        <Search />
        </div>
  );
}

export default App;
