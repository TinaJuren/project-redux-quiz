import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'

import summarypic from 'assets/foxessummary.gif'


export const Summary = () => {
  const correctAnswers = useSelector((state) => state.quiz.answers.filter((answer) => answer.isCorrect === true))

  const dispatch = useDispatch()

  const restart = () => {
      dispatch(quiz.actions.restart())
  }


  return (
    <section className= "summary-section">
        <h1>Congratulations! You made it to the end of the quiz</h1>
        <img className="summary-pic" src={summarypic} alt="a bunch of sketched foxes" />
        <h2>{`You've got ${correctAnswers.length} out of 5`}</h2> 
        <button className= "restart-button" onClick={ restart }>RESTART</button>
    </section>
)
}

