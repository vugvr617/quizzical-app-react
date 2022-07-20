import React, { Fragment } from 'react'
import topImage from '../../assets/blob-img1.svg'
import bottomImage from '../../assets/blob-img2.svg'
import './HomePage.css'

export default function HomePage(props) {
    return (
        <Fragment>
            <img className="top-image" src={topImage}></img>
            <div className='starting-div'>
                <div className="start-text-div">
                    <h1>Quizzical</h1>
                    {/* <input type="text" placeholder='enter your name'></input> */}
                    <p>
                        5 questions from various topics.
                    </p>
                    <button onClick={props.handleStartClick}>Start quiz</button>
                </div>
            </div>
            <img className="bottom-image" src={bottomImage}></img>
        </Fragment>
    )
}