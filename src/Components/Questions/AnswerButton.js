import { useContext } from "react"
import AppContext from "../../Store/AppContext"

export default function AnswerButton() {
    const ctx = useContext(AppContext)

    const checkAnswers = () => {
        console.log('clicked')
        ctx.showAnswers();
    }

    if (!ctx.isAnswersShown) {
        return (<div className='button-div'>
            <button onClick={checkAnswers}>Check Answers</button>
        </div>)
    } else {
        return (
            <div className='button-div'>
                <h2>You scored {ctx.correctAnswers/2}/5 answers</h2>
                <button onClick={checkAnswers}>Play again</button>
            </div>
        )
    }
} 