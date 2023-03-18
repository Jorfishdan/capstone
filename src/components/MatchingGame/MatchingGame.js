import "./MatchingGame.scss";
import { useState, useEffect } from "react";

function MatchingGame() {
  const [cards, setCards] = useState([
    { id: 1, value: 13, type: 'number', flipped: false },
    { id: 2, value: 6, type: 'number', flipped: false },
    { id: 3, value: 9, type: 'number', flipped: false },
    { id: 4, value: 12, type: 'number', flipped: false },
    { id: 5, value: 15, type: 'number', flipped: false },
    { id: 6, value: 18, type: 'number', flipped: false },
    { id: 7, value: 3, type: 'number', flipped: false },
    { id: 8, value: 14, type: 'number', flipped: false },
    { id: 9, value: 11, type: 'number', flipped: false },
    { id: 10, equation: '6+7=', type: 'equation', flipped: false },
    { id: 11, equation: '10-4=', type: 'equation', flipped: false },
    { id: 12, equation: '6+3=', type: 'equation', flipped: false },
    { id: 13, equation: '10+2=', type: 'equation', flipped: false },
    { id: 14, equation: '18-3=', type: 'equation', flipped: false },
    { id: 15, equation: '9+9=', type: 'equation', flipped: false },
    { id: 16, equation: '5-2=', type: 'equation', flipped: false },
    { id: 17, equation: '8+6=', type: 'equation', flipped: false },
    { id: 18, equation: '20-9=', type: 'equation', flipped: false },
  ]);

 

  function shuffleArray(array) {
for (let i = array.length -1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i +1));
  [array[i], array[j]] = [array[j], array[i]];
}
return array
  }
  useEffect(() => {
    setCards(shuffleArray(cards))
  }, [])

const handleClick = (id) => {
  const newCards = [...cards];
  const cardIndex = newCards.findIndex((card) => card.id === id);
  newCards[cardIndex].flipped = true;
  setCards(newCards)
};

  return (
    <div className="card-container">
      {cards.map((card)=> (
        <div 
        key={card.id}
        className={`card ${card.flipped ? "flipped" : ""}`}
        onClick={()=> handleClick(card.id)}
        >
          <div className="front">{card.value || card.equation}</div>
          <div className="back"></div>
          </div>
      ))}
</div>
  
  );
}

export default MatchingGame;
