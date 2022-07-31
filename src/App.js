import './App.css';
import React, { Fragment, useState, useEffect, useContext } from 'react';
import HomePage from './Components/Home/HomePage';
import Question from './Components/Questions/Question';
import topImage from './assets/blob-img1.svg'
import bottomImage from './assets/blob-img2.svg'
import AnswerButton from './Components/Questions/AnswerButton';

function App() {
  const [isAppStarted, startApp] = useState(false);
  const [quizData, setQuizData] = useState([]);
  const [isDataLoaded, setIsLoaded] = useState(false);
  const [stateChanger, setStateChanger] = useState(0);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple&encode=url3986")
      .then((response) => response.json())
      .then((response) => setQuizData(response.results))
      .then((response) => setIsLoaded(true));
  }, [stateChanger])

  const startFunction = () => {
    startApp(true)
  }

  const playAgainHandler = () => {
    console.log(stateChanger)
    setStateChanger((prevState) => {return prevState = prevState + 1});
  }

  if (isDataLoaded && isAppStarted) {
    return (
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
          <AnswerButton playAgainHandler={playAgainHandler}></AnswerButton>
          <div className='image-div'>
            <img className="bottom-image" src={bottomImage}></img>
          </div>
        </div>
    )
  }

  return (
    <Fragment>
       {!isAppStarted && <HomePage handleStartClick={startFunction}></HomePage>}
    </Fragment>
  );
}

export default App;
