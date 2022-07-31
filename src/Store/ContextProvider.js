import AppContext from "./AppContext"
import React, { useState } from "react"

export default function ContextProvider(props) {
    const [isAnswersShown, showAnswerState] = useState(false)
    const [correctAnswers, findCorrectAnswers] = useState(0);
    const [isPlayedAgain, setGameRestarted] = useState(false);
    const appContextData = {
        isAnswersShown: isAnswersShown,
        correctAnswers: correctAnswers,
        isPlayedAgain: isPlayedAgain,
        showAnswers: (bool) => {
            showAnswerState(bool);
        },
        checkAnswers: () => {
            if (correctAnswers < 5) {
                findCorrectAnswers((prevNumber) => {
                    return prevNumber = prevNumber + 1;
                })
            }
        },
        setGameRestarted: (bool) => {
            setGameRestarted(bool);
            findCorrectAnswers(0);
        }
    }

    return (
        <AppContext.Provider value={appContextData}>
            {props.children}
        </AppContext.Provider>
    )
}