import "./MatchingGame.scss";
import { useState, useEffect } from "react";
import DataCard from "../DataCard/DataCard";

function MatchingGame() {

function randomSort(a,b) {
  return 0.5 - Math.random();
}

const mathProblems = [
  { equation: '2 + 2', answer: '4' },
  { equation: '5 * 6', answer: '30' },
  { equation: '10 - 3', answer: '7' },
];
const [values, setValues] = useState([...mathProblems, ...mathProblems].sort(randomSort));

const [cards, setCards] = useState([...Array(16).keys()].map(n => false));
const [selected, setSelected] = useState([]);
const [hits, setHits] = useState(0);

useEffect(() => {
const updatedValues = values.map((item) => {
  const answer = eval(item.equation);
  return {
    ...item,
    answer:answer.toString(),
  }
})
setValues(updatedValues);
}, [])

const resetSelectedCards = (cards, selected, setCards, setSelected) => {
  const newCards = [...cards];
  const newSelected = [];
  setCards(newCards);
  setSelected(newSelected);
}

const clickHandler = (index) => {
  let newCards = [...cards];
  let newSelected = [...selected];
  let newHits = hits;
  if(newSelected.length > 1) {
    newHits++;
    newCards[newSelected[0]] = false;
    newCards[newSelected[1]] = false;
    resetSelectedCards(newCards, newSelected, setCards, setSelected);
  }

  if (newSelected.length > 1 && newSelected[0] !== newSelected[1]) {
    if (values[newSelected[0]].answer === values[newSelected[1]].answer) {
      resetSelectedCards(newCards, newSelected, setCards, setSelected);
    } else {
      setTimeout(() => {
        newCards[newSelected[0]] = false;
        newCards[newSelected[1]] = false;
        resetSelectedCards(newCards, newSelected, setCards, setSelected);
      }, 1000);
    } 
  }

  newCards[index] = true;
  newSelected.push(index);
  if (newSelected.length >= 2) {
    const [idx1, idx2] = newSelected;
    if (values[idx1]?.answer === values[idx2]?.answer) {
      resetSelectedCards(newCards, newSelected, setCards, setSelected);
    }
  }
  if(newSelected.length >=2 && values[newSelected[0]].answer === values[newSelected[1]].answer) {
    resetSelectedCards(newCards, newSelected, setCards, setSelected);
    console.log('newSelected:', newSelected);
console.log('values:', values);
console.log('values[newSelected[0]]:', values[newSelected[0]]);
console.log('values[newSelected[1]]:', values[newSelected[1]]);
  }
  setCards(newCards);
  setSelected(newSelected);
  setHits(newHits);

  
}

const cardElements = cards.map((_, cardIndex) => (
  <DataCard
    key={cardIndex} 
    mathProblems={values[cardIndex]}
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


