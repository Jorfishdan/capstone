import "./MathCards.scss";

import { useEffect, useState } from "react";
import axios from "axios";

function MathCards() {
  const [generateNumber, setGenerateNumber] = useState([]);
  const [flipCard, setFlipCard] = useState(false);

  useEffect(() => {
    const fetchNumbers = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/numbers`);
        const numbers = response.data.map((number) => ({
          ...number,
          flipCard: false,
        }));
        console.log(response.data);
        setGenerateNumber(numbers);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNumbers();
  }, []);

  const handleFlipCard = (index) => {
    const newGenerateNumber = [...generateNumber];
    newGenerateNumber[index].flipCard = !newGenerateNumber[index].flipCard;
    setGenerateNumber(newGenerateNumber);
    console.log("clicked");
  };
  return (
    <>
      {generateNumber.map((digit, index) => {
        return (
          <section className="math__wrapper" key={digit.id}>
            <div onClick={() => handleFlipCard(index)}>
             
            <div
              className={`math__card display ${digit.flipCard ? "" : "math__card-front"}`}>
                {digit.flipCard ? <h3 className="math__text-horse">Horse</h3> : "" } 
            </div>
          
            </div>
          </section>
        );
      })}
    </>
  );
}

export default MathCards;

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
