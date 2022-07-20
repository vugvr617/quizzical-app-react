import React from 'react';

const AppContext = React.createContext({
    isAnswersShown: false,
    correctAnswers: 0,
    showAnswers: (state) => {},
    checkAnswers: () => {}
})

export default AppContext;