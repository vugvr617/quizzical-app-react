import './Answers.css'
import Input from './Input'

export default function Answers (props) {
    return (
        <div className='answers-div'>
            {props.answersArray.map((answer)=>{
                return (<Input 
                    value={answer.value} 
                    name={props.name}
                    isCorrect={answer.isCorrect}></Input>)
            })}
        </div>
    )
}