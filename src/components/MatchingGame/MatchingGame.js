import "./MatchingGame.scss";
import { useState, useEffect } from "react";
import DataCard from "../DataCard/DataCard";

function MatchingGame() {

function randomSort(a,b) {
  return 0.5 - Math.random();
}

const val = ["noto:bird", "noto:blossom", "noto:cactus", "noto:avocado", "noto:cookie", "noto:crystal-ball", "noto:peach", "noto:gorilla"];
const values = [...val.concat(val)].sort(randomSort);

const [cards, setCards] = useState([...Array(16).keys()].map(n => false));
const [selected, setSelected] = useState([]);
const [hits, setHits] = useState(0);

const clickHandler = (key) => {
  let newCards = [...cards];
  let newSelected = [...selected];
  let newHits = hits;
  if(newSelected.length > 1) {
    newHits++;
    newCards[newSelected[0]] = false;
    newCards[newSelected[1]] = false;
    newSelected = [];
  }
  newCards[key] = true;
  newSelected.push(key);
  if(newSelected.length > 1 && values[newSelected[0]] === values[newSelected[1]]) {
    newSelected = [];
  }
  setCards(newCards);
  setSelected(newSelected);
  setHits(newHits);
}

const cardElements = cards.map((_, cardIndex) => (
  <DataCard
    key={cardIndex} 
    value={values[cardIndex]}
    active={cards[cardIndex]}
    clicked={() => clickHandler(cardIndex)}
  />
));

return (
  <>
    <h1>Memory Game</h1>
    <div className="Board">{cardElements}</div>
    <p>Hits: {hits}</p>
  </>
);
}

export default MatchingGame;


  /* <div
onClick={() => setFlipHorse(!flipHorse)}
className="animalnoises__card horse"
>
<div
  className={`animalnoises__front ${
    flipHorse ? "animalnoises__animal-front" : ""
  }`}
>
  <audio controls>
    <source
      className="animalnoises__audio"
      src={horse}
      type="audio/mp3"
    />
    <p>Your browser does not support this audio</p>
  </audio>
</div>
<div onClick={() => setFlipHorse(!flipHorse)}>
  <div
    className={`animalnoises__back ${
      flipHorse ? "" : "animalnoises__animal-back"
    }`}
  >
    <h3 className="animalnoises__text-horse">Horse</h3>
    <img
      className="animalnoises__horse-gif"
      src="https://bestanimations.com/media/horse-art/570970473animated-horse-gif-105.gif#.Y-JymKMBO5k.link"
      alt="horse gif"
    />
  </div>
</div>
</div> */


// const [selectedCards, setSelectedCards] = useState([]);
// const [matchedCards, setMatchedCards] = useState([]);

//   function shuffleArray(array) {
// for (let i = array.length -1; i > 0; i--) {
//   const j = Math.floor(Math.random() * (i +1));
//   [array[i], array[j]] = [array[j], array[i]];
// }
// return array
//   }

//   useEffect(() => {
//     setCards(shuffleArray(cards))
//   }, [])
