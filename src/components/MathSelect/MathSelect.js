import axios from "axios";
import { useEffect, useState } from "react";
import Timer from "../Timer/Timer";
import "./MathSelect.scss";
import minus from "../../assets/images/speech-bubble.gif";
import add from "../../assets/images/winner.gif";
import quiz from "../../assets/images/quiz.gif";
import HPBubbles from "../HPBubbles/HPBubbles";
import home from "../../assets/images/house-static.png";
import clock from "../../assets/images/pocket-watch.png";
import vet from "../../assets/images/veterinary.png";
import food from "../../assets/images/dog-food.png";
import paw from "../../assets/images/pawprint.png";
import info from "../../assets/images/info-static.png";



function MathSelect() {
  const [showEquation, setShowEquation] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [addPoints, setAddPoints] = useState(false);
  const [minusPoints, setMinusPoints] = useState(false);

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
  const allAnswers = [
    currentQuestion.correct_answer,
    ...currentQuestion.incorrect_answer,
  ].sort(() => Math.random() - 0.5);

  const clickHandler = (clickedAnswer) => {
    console.log("clicked");

    if (clickedAnswer === currentQuestion.correct_answer) {
      setAddPoints(true);
      setMinusPoints(false);
      setScore(score + 1);
    } else if (currentQuestion.incorrect_answer.includes(clickedAnswer)) {
      setMinusPoints(true);
      setAddPoints(false);
      setScore(score - 2);
    }
    setSelectedAnswer(clickedAnswer);
    if (currentQuestionIndex === showEquation.length -1) {
        setCurrentQuestionIndex(0);
    } else {
        setCurrentQuestionIndex((prevIndex) => prevIndex +1)
    }
    setSelectedAnswer(null);

    setTimeout(() => {
      setAddPoints(false);
      setMinusPoints(false);
    }, 2000);
  };

  return (
    <>
    <header className="mathselect__header">
        



    </header>
      <section className="mathselect">
        <HPBubbles />
        <div className="mathselect__items-wrapper">
          <article className="mathselect__timer">
            <Timer />
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
              <img src={quiz} alt="question mark icon" className="mathselect__q-mark" />
            </article>
          )}
          <div className="mathselect__answer-wrapper">
            {allAnswers.map((answer, index) => (
              <span
                key={index}
                className={`mathselect__answer answer${
                  selectedAnswer === answer
                    ? currentQuestion.correct_answer === answer
                      ? "mathselect__answer--correct"
                      : "mathselect__answer--incorrect"
                    : ""
                }`}
                onClick={() => clickHandler(answer)}
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
