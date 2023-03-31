import axios from "axios";
import { useEffect, useState } from "react";
// import Timer from "../Timer/Timer";
import MathSelectTimer from "../MathSelectTimer/MathSelectTimer";
import "./MathSelect.scss";
import minus from "../../assets/images/speech-bubble.gif";
import add from "../../assets/images/winner.gif";
import quiz from "../../assets/images/quiz.gif";
import HPBubbles from "../HPBubbles/HPBubbles";
// import home from "../../assets/images/house-static.png";
// import clock from "../../assets/images/pocket-watch.png";
// import vet from "../../assets/images/veterinary.png";
// import food from "../../assets/images/dog-food.png";
// import paw from "../../assets/images/pawprint.png";
// import info from "../../assets/images/info-static.png";
import MathSelectPet from "../MathSelectPet/MathSelectPet";

function MathSelect({ selectedTime }) {
  const [showEquation, setShowEquation] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [addPoints, setAddPoints] = useState(false);
  const [minusPoints, setMinusPoints] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [clickedAnswer, setClickedAnswer] = useState(null);

  function handleRemainingTimeChange(remainingTime) {
    if (remainingTime === 0) {
      setScore(0);
    }
  }

  useEffect(() => {
    const mathAnswer = async () => {
      try {
        const response = await axios.get(` http://localhost:8080/numbers`);
        setShowEquation([...response.data]);
        const randomIndex = Math.floor(Math.random() * response.data.length);
        setCurrentQuestionIndex(randomIndex);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    mathAnswer();
  }, []);

  if (currentQuestionIndex === null) {
    return <p>Loading...</p>;
  }
  const currentQuestion = showEquation[currentQuestionIndex];

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const allAnswers = [
    currentQuestion.correct_answer,
    ...currentQuestion.incorrect_answer,
  ];
  shuffleArray(allAnswers);

  const clickHandler = (clickedAnswer, index) => {
    console.log("clicked");

    if (clickedAnswer === currentQuestion.correct_answer) {
      setAddPoints(true);
      setMinusPoints(false);
      setScore(score + 1);
      document.body.classList.add = "green-background";
    } else if (currentQuestion.incorrect_answer.includes(clickedAnswer)) {
      setMinusPoints(true);
      setAddPoints(false);
      setScore(score - 2);
      document.body.classList.add = "orange-background";
    }

    setTimeout(() => {
      setAddPoints(false);
      setMinusPoints(false);
      setClickedAnswer(null);
      setSelectedAnswer(null);
      setSelectedAnswerIndex(null);
      if (currentQuestionIndex === showEquation.length - 1) {
        setCurrentQuestionIndex(0);
      } else {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      }
    }, 1000);
  };

  return (
    <>
      <section className="mathselect">
        <HPBubbles />
        <MathSelectPet />
        <div className="mathselect__items-wrapper">
          <article className="mathselect__timer">
            <MathSelectTimer
              setScore={setScore}
              selectedTime={selectedTime}
              onRemainingTimeChange={handleRemainingTimeChange}
            />
          </article>
          <article className="mathselect__instructions">
            <span className="mathselect__intro--1">
              Select the correct answer
            </span>
            <span className="mathselect__intro--2">
              Add in the timer for speed rounds
            </span>
          </article>
          <article className="mathselect__pts">
            {score}
            {addPoints && (
              <img
                src={add}
                alt="add points icon"
                className="mathselect__pts--minus"
              />
            )}
            {minusPoints && (
              <img
                src={minus}
                alt="minus points icon"
                className="mathselect__pts--add"
              />
            )}
          </article>
        </div>
        <div className="mathselect__response-wrapper">
          {currentQuestion && (
            <article className="mathselect__question">
              {currentQuestion.question}
              <img
                src={quiz}
                alt="question mark icon"
                className="mathselect__q-mark"
              />
            </article>
          )}
          <div className="mathselect__answer-wrapper">
            {allAnswers.map((answer, index) => (
              <span
                key={`${index}_${answer}`}
                className={`mathselect__answer ${
                  index === selectedAnswerIndex &&
                  clickedAnswer === currentQuestion.correct_answer
                    ? "correct"
                    : ""
                }`}
                onClick={() => clickHandler(answer, index)}
              >
                {answer}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default MathSelect;
