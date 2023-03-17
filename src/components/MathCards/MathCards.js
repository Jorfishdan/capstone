import "./MathCards.scss";

import { useEffect, useState } from "react";
import axios from "axios";

function MathCards() {
  const [generateNumber, setGenerateNumber] = useState([]);

  useEffect(() => {
    const fetchNumbers = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/numbers`);
        const numbers = response.data.map((number) => ({
          ...number,
          isFlipped:false,
          cardType: "",
        }));
        console.log(response.data);
        setGenerateNumber(numbers);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNumbers();
  }, []);

  const handleCardFlip = (index,cardType) => {
    const newGenerateNumber = [...generateNumber];
    newGenerateNumber[index].isFlipped = !newGenerateNumber[index].isFlipped;
    newGenerateNumber[index].cardType = cardType;
    setGenerateNumber(newGenerateNumber);
    console.log("clicked");
  };

  // const handleAnswerCardFlip = (index) => {
  //   const newGenerateNumber = [...generateNumber];
  //   newGenerateNumber[index].isFlipped = !newGenerateNumber[index].isFlipped;
  //   setGenerateNumber(newGenerateNumber);

  //   console.log("clicked");
  // };

  return (
    <>
      {generateNumber.map((digit, index) => {
        return (
          <section className="math__wrapper" key={digit.id}>
            <div onClick={() => handleCardFlip(index, "equation")}>
             
            <div
              className={`math__card display ${digit.isFlipped && digit.cardType === "equation" ? "" : "math__card-front"}`}>
                {digit.isFlipped && digit.cardType === "equation" ? (<h3 className="math__text-equation">{digit.equation}</h3>) : ("" )} 
            </div>
          
            </div>
            <div onClick={() => handleCardFlip(index, "answer")}>
             
             <div
               className={`math__card display ${digit.isFlipped && digit.cardType === "answer" ? "" : "math__card-front"}`}>
                 {digit.isFlipped && digit.cardType === "answer" ? (<h3 className="math__text-answer">{digit.answer}</h3>) : ("") } 
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
