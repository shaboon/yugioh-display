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
        <div>
            <h1>Landing Page</h1>
                <div className="landing-nav">
                    <div className="nav-to-board">
                        <h1>Board</h1>
                    </div>
                    <div>
                        <h1 className="nav-to-wiki">Database</h1>
                    </div>
                </div>
        </div>
    )
}