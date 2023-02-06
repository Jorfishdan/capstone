import "./BrainTeaserCard.scss"
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BrainTeaserCard() {

   
    const [answer, setAnswer] = useState([]);
    const [question, setQuestion] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState({})



    useEffect(() => {
        const triviaAnswer = async () => {
          try {
            const response = await axios.get(
              `https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean`
            );
            setQuestion(response.data.results);
          } catch (error) {
            console.log(error);
          }
        };
        triviaAnswer(question[0]);
      }, []);
        


    return(
        <div>
        {question.map(q => (
        <section className="brainteaser">
            <div className="brainteaser__wrapper">
                <h1 className="brainteaser__question">{q.question}</h1>
                <article className="brainteaser__cardtrue">
                    <h1 className="brainteaser__true--text">True</h1>
                </article>
                <article className="brainteaser__cardfalse">
                    <h1 className="brainteaser__false--text">False</h1>
                </article>
            </div>
        </section>
    
    ))}
    </div>
    )
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