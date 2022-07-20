import './Answers.css'
import { useRef, useContext, useState } from 'react'
import AppContext from '../../Store/AppContext'

export default function Input(props) {
    const inputRef = useRef()
    const ctx = useContext(AppContext)

    const [checkcorrect, setCorrect] = useState(false);

    try {
        if (props.isCorrect && ctx.isAnswersShown) {
            var labelStyle = {
                backgroundColor: (inputRef.current.checked) ? "#94D7A2" : "#F8BCBC",
                borderColor: (inputRef.current.checked) ? "#94D7A2" : "#F8BCBC"
            }
        }  
        if (props.isCorrect && ctx.isAnswersShown && inputRef.current.checked) {
            if (checkcorrect === false) {
                setCorrect(true);
                ctx.checkAnswers()
            }
        }
    } catch {
    }
    const setChecked = () => {
        inputRef.current.checked = true;
    }
    return (
        <div>
            <div className='answer'>
                <input ref={inputRef} type="radio"
                    id={props.value}
                    value={props.value}
                    // onChange={handleAnswerChange}
                    name={props.name}
                // checked={dataArray == idArray[0] ? true : false}
                ></input>
                {/* <label style={labelStyle} htmlFor={idArray[0]}>{idArray[0]}</label> */}
                <label style={labelStyle} onClick={setChecked} htmlFor={props.value} >{decodeURIComponent(props.value)}</label>
            </div>
        </div>
    )
}