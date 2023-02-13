import axios from 'axios';
import { useRef, useState } from 'react';
import {v4 as uuidv4} from "uuid";
import './SubmitFact.scss';


function SumbitFact() { 

    const formRef = useRef(null);
    // const [isShown, setIsShown] = useState(false);

    function handleSubmit(event) {
        event.preventDefault()
        const form = formRef.current;
        const question = form.question.value;
        const answer = form.answer.value;
        const incorrect = form.incorrect.value;
        const explain = form.explain.value;

        if ( !question || !answer || !incorrect || !explain) {
            alert("Please fill out all the fields")
            return;
        }

    axios.post(`http://localhost:8080/facts`, {
        id: uuidv4(),
        question: question,
        correct_answer: answer,
        incorrect_answer: incorrect,
        explanation: explain,
    })
    alert("It's been added to the game!")  
    // formRef.current.reset();

};

    return (
        <>
        {/* {isShown && ( */}
        {/* <div className="form__wrapper"> */}
        <form onSubmit={handleSubmit} ref={formRef} className="form__submit">
            <h2 className="form__add-question">Add a question to the game!</h2>
            <input type="text" className="form__input" name="question" placeholder="Add a question..."></input>

            <h2 className="form__add-answer">What is the correct answer?</h2>
            <input className="form__answer" type="text" name="answer" placeholder="Is it true or false?"></input>

            <h2 className="form__add-incorrect">What is the incorrect answer?</h2>
            <input className="form__incorrect" type="text" name="incorrect" placeholder="Enter it here..."></input>

            <h2 className="form__add-explain">Add an explanantion</h2>
            <input className="form__explain" type="text" name="explain" placeholder="The more you know :)"></input>

            <button className="form__button" onClick={handleSubmit} >Submit</button>

        </form>
        {/* </div> */}
        {/* )} */}
        </>
    )
}

export default SumbitFact;