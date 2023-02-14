import "./BrainTeaserCard.scss";
import axios from "axios";
import { useEffect, useState } from "react";

function BrainTeaserCard() {
  const [answer, setAnswer] = useState([]);
  const [questionList, setQuestionList] = useState({});
  const [showQuestion, setShowQuestion] = useState({});
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [explain, setExplain] = useState(null);

  useEffect(() => {
    const triviaAnswer = async () => {
      try {
        const response = await axios.get(` http://localhost:8080/facts`);
        setQuestionList(response.data);
        setShowQuestion(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    triviaAnswer();
  }, []);

  const revealHandler = (event) => {
    setAnswer(showQuestion.correct_answer);

    if (
      (event === "True" && showQuestion.correct_answer === "True") ||
      (event === "False" && showQuestion.correct_answer === "False")
    ) {
      setScore(score + 1);
    }
    setExplain(showQuestion.explanation);
  };

  const nextHandler = () => {
    setIndex(index + 1);
    setShowQuestion(questionList[index + 1]);
    setAnswer(null);
    setExplain(null);
  };

  return (
    <div>
      {showQuestion && (
        <section className="brainteaser">
          <div className="brainteaser__wrapper">
            <h1 className="brainteaser__question">{showQuestion.question}</h1>
            <div className="brainteaser__cards-wrapper">
              <article
                className="brainteaser__cardtrue"
                onClick={() => revealHandler("True")}
              >
                <h1 className="brainteaser__true--text">True</h1>
              </article>

              <article
                className="brainteaser__cardfalse"
                onClick={() => revealHandler("False")}
              >
                <h1 className="brainteaser__false--text">False</h1>
              </article>
            </div>
            <article className="brainteaser__answer">{answer}</article>
            <p className="brainteaser__explain">{explain}</p>
            <div className="brainteaser__next-wrapper" onClick={nextHandler}>
              <button className="brainteaser__next" onClick={nextHandler}>
                Next
              </button>
            </div>
            <div className="brainteaser__score">Score {score}</div>
          </div>
        </section>
      )}
    </div>
  );
}

export default BrainTeaserCard;
