export default function Landing() {
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

          const link = document.createElement('a');
          link.href = cardData[randomStart + i].ygoprodeck_url;
          console.log(link.href);
          link.target = '_blank';
    
          // This the cards pulled from the API
          const cardIMG = document.createElement("img");
          cardIMG.className = 'card-img drop-shadow-md m-2';
          cardIMG.src = cardData[randomStart + i].card_images[0].image_url;
          cardIMG.width = 100;
          cardIMG.alt = cardData[randomStart + i].name;
    

          container?.appendChild(link);
          link.appendChild(cardContainer)
          cardContainer?.appendChild(cardIMG);
      
        }
        
        console.log(data);
      }
    
      handleAPICall();

    return (
        <div>
            <div className="flex flex-wrap justify-center" id="api-test" >
            </div>
            <h1>The Card Shop</h1>
                <div className="landing-nav">
                    <div className="nav-to-board">
                        <h1>Board</h1>
                        <p> Here you can track a current board for a yugioh game - a way to streamline play and card readability</p>
                    </div>
                    <div>
                        <h1 className="nav-to-wiki">Database</h1>
                        <p> Here you can search for any card in the game and read up on its effects and lore</p>
                    </div>
                </div>
        </div>
    )
}