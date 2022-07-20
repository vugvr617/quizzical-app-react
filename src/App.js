import './App.css';
import React, { Fragment, useState, useEffect } from 'react';
import HomePage from './Components/Home/HomePage';
import Question from './Components/Questions/Question';
import topImage from './assets/blob-img1.svg'
import bottomImage from './assets/blob-img2.svg'
import ContextProvider from './Store/ContextProvider';
import AnswerButton from './Components/Questions/AnswerButton';

function App() {
  const [isAppStarted, startApp] = useState(false);
  const [quizData, setQuizData] = useState([]);
  const [isDataLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple&encode=url3986")
      .then((response) => response.json())
      .then((response) => setQuizData(response.results))
      .then((response) => setIsLoaded(true));
  }, [])

  const startFunction = () => {
    startApp(true)
  }

  const checkAnswers = () => {

  }

  if (isDataLoaded) {
    return (
      <ContextProvider>
        <div className='main-content'>
          <img className="top-image" src={topImage}></img>
          <div>
            {quizData.map((question) => {
              return <Question
                correctAnswer={(question.correct_answer)}
                incorrectAnswers={(question.incorrect_answers)}
                quizQuestion={decodeURIComponent(question.question)}></Question>
            })}
          </div>
          <AnswerButton></AnswerButton>
          <div className='image-div'>
            <img className="bottom-image" src={bottomImage}></img>
          </div>
        </div>
      </ContextProvider>
    )
  }

  return (
    <Fragment>
      {/* {!isAppStarted && <HomePage handleStartClick={startFunction}></HomePage>} */}
    </Fragment>
  );
}

export default App;
