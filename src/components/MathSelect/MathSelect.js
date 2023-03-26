import axios from "axios";
import { useEffect, useState } from "react";
import Timer from "../Timer/Timer";
import "./MathSelect.scss";
function MathSelect() {
  const [showEquation, setShowEquation] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const mathAnswer = async () => {
      try {
        const response = await axios.get(` http://localhost:8080/numbers`);
        setShowEquation([...response.data]);
        setCurrentQuestionIndex(
          Math.floor(Math.random() * response.data.length)
        );
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
      setScore(score + 1);
    } else if (currentQuestion.incorrect_answer.includes(clickedAnswer)) {
      setScore(score -2);
    }

    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
}

  return (
    <>
      <section className="mathselect">
        <div className="mathselect__items-wrapper">
          <article className="mathselect__timer">
            <Timer />
          </article>
          <article className="mathselect__pts">{score}</article>
        </div>
        <div className="mathselect__response-wrapper">
            {currentQuestion && (
          <article className="mathselect__question">
            {currentQuestion.question}
          </article>
            )}
          <div className="mathselect__answer-wrapper">
            {allAnswers.map((answer, index) => (
              <span
                key={index}
                className="mathselect__answer"
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
