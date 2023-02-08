import "./BrainTeaserCard.scss"
import axios from "axios";
import { useEffect, useState } from "react";

function BrainTeaserCard() {

   
    const [answer, setAnswer] = useState([]);
    const [questionList, setQuestionList] = useState({});
    const [showQuestion, setShowQuestion] = useState({});
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);

    // `https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean`



    useEffect(() => {
        const triviaAnswer = async () => {
          try {
            const response = await axios.get(
              ` http://localhost:8080/facts`
            );
            // console.log(response.data[0])
            setQuestionList(response.data);
            setShowQuestion(response.data[0])
        
          } catch (error) {
            console.log(error);
          }
        };
        triviaAnswer();
      }, []);

    const revealHandler = ()=> {
    setAnswer(showQuestion.correct_answer)
    if(showQuestion.correct_answer === "True")
    setScore(score +1)
    };

    const nextHandler = () => {
        console.log("hello")
       setIndex(index +1);
        setShowQuestion(questionList[index +1])
        setAnswer(null)
       
    }


    return(
        <div>
            {showQuestion && (
        <section className="brainteaser">
            <div className="brainteaser__wrapper">
                <h1 className="brainteaser__question">{showQuestion.question}</h1>
                <div className="brainteaser__cards-wrapper">
                <article className="brainteaser__cardtrue" onClick={revealHandler}>
                    <h1 className="brainteaser__true--text">True</h1>
                </article>
                <article className="brainteaser__cardfalse" onClick={revealHandler}>
                    <h1 className="brainteaser__false--text">False</h1>
                </article>
                </div>
                <article className="brainteaser__answer">{answer}
                </article>
                <button className="brainteaser__next" onClick={nextHandler}>Next</button>
                <div className="brainteaser__score">Score {score}</div>
               
            </div>
        </section>
    
    )}
    </div>
    );
        }

export default BrainTeaserCard;

/////////////useEffect usng the animal API //////////////

// const BASE_API_URL = "https://api.api-ninjas.com/v1/animals";
// const API_KEY = "bfJDGdZyYpx28nqXY08M9Q==i2uIUSUFWBIh32dM";
// let query = "walrus"
// const url = `${BASE_API_URL}?name=${query}`;

// const [answer, setAnswer] = useState("");

// useEffect(() => {
//     const mainAnswer = async () => {
//       try {
//         const response = await axios.get(url, {
//             headers: {
//                 "X-Api-Key": API_KEY 
//             }
//         });
//         console.log(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     mainAnswer();
//   }, [query]);



////////// useEffect using the trivia API //////////// 
// useEffect(() => {
//     axios
//     .get(`https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean`)
//     .then(res => {
//         setAnswer(res.data.results.map((questionItem, index) => {
//             const correctAnswer = questionItem.correct_answer
//             const options = [...questionItem.incorrect_answers, correctAnswer]
//             return{
//                 id: `${index}-${Date.now()}`,
//                 question:questionItem.question,
//                 answer: questionItem.correct_answer,
//                 options:options.sort(() => Math.random() - .5)
//             }
//         }))
      
//        setQuestion(question[0]);
//     })
// }, [])

////////////////tried to decode the string//////////
 //   function decodeString(str) {
    //     const textArea = document.createElement('textarea')
    //     textArea.innerHTML = str
    //     return textArea.value
    //   }

    ////////////tried doing a 2nd axios call to put into the revealhandler///////
       //   useEffect(() => {
    //     const answer = async () => {
    //         try {
    //             const response = await axios.get(`https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean`
    //             );
    //             setAnswer(response.data.results[0].correct_answer)

    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     answer();
    // }, [])