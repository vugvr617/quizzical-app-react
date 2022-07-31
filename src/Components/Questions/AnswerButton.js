import { useContext } from "react"
import AppContext from "../../Store/AppContext"

export default function AnswerButton(props) {
    const ctx = useContext(AppContext)

    const checkAnswers = () => {
        ctx.showAnswers(true);
    }

    const playAgainHandler = () => {
        ctx.showAnswers(false)
        ctx.setGameRestarted(true)
    }

    if (!ctx.isAnswersShown) {
        return (<div className='button-div'>
            <button onClick={checkAnswers}>Check Answers</button>
        </div>)
    } else if (ctx.isAnswersShown) {
        return (
            <div className='button-div'>
                <h2>You scored {ctx.correctAnswers / 2}/5 answers</h2>
                <button className="play-again-button" onClick={() => {
                    props.playAgainHandler();
                    playAgainHandler();
                    }}>Play again</button>
            </div>
        )
    }
} 