import Answers from "../Answers/Answers"
import "./Question.css"
import { nanoid } from 'nanoid'


export default function Question(props) {
    let incorrectAnwersArray = props.incorrectAnswers.map((answer) => {
        return {value: answer, isCorrect: false}
    })

    let answersArray = [...incorrectAnwersArray, {value: props.correctAnswer, isCorrect: true}];
    let newAnswersArray = [];
    let newDataArray = [];

    while (newDataArray.length < 4) {
        let randomNumber = Math.floor(Math.random() * 4);
        if (newDataArray.includes(randomNumber) === false) {
            newDataArray.push(randomNumber);
        }
    }

    for (let i = 0; i < newDataArray.length; i++) {
        newAnswersArray[newDataArray[i]] = answersArray[i];
    }


    return (
        <div className="main-content">
            <div className='questions-div'>
                <div className='question'>
                    <h2>{props.quizQuestion}</h2>
                    <Answers answersArray={newAnswersArray} name={nanoid()}></Answers>
                    <hr></hr>
                </div>
            </div>
        </div>
    )
}