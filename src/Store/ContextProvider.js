import AppContext from "./AppContext"
import React, { useState } from "react"

export default function ContextProvider(props) {
    const [isAnswersShown, showAnswerState] = useState(false)
    const [correctAnswers, findCorrectAnswers] = useState(0);
    const appContextData = {
        isAnswersShown: isAnswersShown,
        correctAnswers: correctAnswers,
        showAnswers: () => {
            showAnswerState(true);
        },
        checkAnswers: () => {
            if (correctAnswers < 5) {
                findCorrectAnswers((prevNumber) => {
                    return prevNumber = prevNumber + 1;
                })
            }
        }
    }

    return (
        <AppContext.Provider value={appContextData}>
            {props.children}
        </AppContext.Provider>
    )
}