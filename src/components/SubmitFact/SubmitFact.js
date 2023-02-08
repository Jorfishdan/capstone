import axios from 'axios';
import { useRef } from 'react';
import {v4 as uuidv4} from "uuid";
import './SubmitFact.scss';


function SumbitFact() { 
    const formRef = useRef();

    function handleSubmit(event) {
        event.preventDefault()
        const form = formRef.current;
        const question = form.question.value;
        const answer = form.answer.value;
        const incorrect = form.incorrect.value;
        const explain = form.explain.value;

    }
    return (
        <form onSumbit={handleSubmit} ref={formRef} className="form__submit">
            <h2 className="form__add-question">Add a question to the game!</h2>
            <input type="text" className="form__input" name="question" placeholder="Add a question"></input>

            <h2 className="form__add-answer">What is the correct answer?</h2>
            <input className="form__answer" type="text" name="answer" placeholder="Enter here"></input>

            <h2 className="form__add-incorrect">What is the incorrect answer?</h2>
            <input className="form__incorrect" type="text" name="incorrect" placeholder="Enter here"></input>

            <h2 className="form__add-explain">Add an explanantion</h2>
            <input className="form__explain" type="text" name="explain" placeholder="Enter here"></input>

        </form>
    )
}

export default SumbitFact;