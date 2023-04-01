import axios from "axios";
import { useEffect, useState } from "react";
import MathSelectTimer from "../MathSelectTimer/MathSelectTimer";
import "./MathSelect.scss";
import minus from "../../assets/images/speech-bubble.gif";
import add from "../../assets/images/winner.gif";
import quiz from "../../assets/images/quiz.gif";
import HPBubbles from "../HPBubbles/HPBubbles";
import MathSelectModal from "../MathSelectModal/MathSelectModal";
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
  const [showModal, setShowModal] = useState(false);
  const [finalScore, setFinalScore] = useState(0);



  function handleRemainingTimeChange(remainingTime) {
    if (remainingTime === 1 && currentQuestionIndex !== null) {
      setTimeout(() => {
      setFinalScore(score);
      setShowModal(true);
     
    }, 1000);
    console.log("works")
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
    } else if (currentQuestion.incorrect_answer.includes(clickedAnswer)) {
      setMinusPoints(true);
      setAddPoints(false);
      setScore(score - 2);
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
      {showModal && (
        <div className="modal-overlay">
          <MathSelectModal
            finalScore={finalScore}
            setFinalScore={setFinalScore}
            onClose={() => setShowModal(false)}
          />
        </div>
      )}
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
