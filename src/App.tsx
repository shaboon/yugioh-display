import React from 'react';
import './App.css';

import Landing from './components/pages/Landing';
import Search from './components/Search';



// https://db.ygoprodeck.com/api/v7/cardinfo.php

function App() {

  const handleAPICall = async () => {
    const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php');
    const data = await response.json();

    const cardData = data.data;
    console.log(cardData[0]);
    console.log(cardData.length);

    const randomStart = Math.floor(Math.random() * cardData.length);
    for (let i = 0; i < 20; i++) {
      // console.log(cardData[i].name);
      const container = document.getElementById('api-test');
      const cardContainer = document.createElement("div");

      // This the cards pulled from the API
      const cardIMG = document.createElement("img");
      cardIMG.className = 'card-img drop-shadow-md m-2';
      cardIMG.src = cardData[randomStart + i].card_images[0].image_url;
      cardIMG.width = 100;
      cardIMG.alt = cardData[randomStart + i].name;


      container?.appendChild(cardContainer);
      cardContainer?.appendChild(cardIMG);
  
    }
    
    console.log(data);
  }

  handleAPICall();

  return (
    <div className="App flex bg-gradient-to-t from-purple-500 to-indigo-900">
        <Landing />
        <Search />
        <div className='api-test flex flex-wrap bg-gray-600 justify-center rounded-md drop-shadow-xl' id='api-test'>
          <h1>API Test</h1>
          <p>API Test</p>
        </div>
    </div>
  );
}

export default App;
