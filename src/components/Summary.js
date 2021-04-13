import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'


export const Summary = () => {
  const correctAnswers = useSelector((state) => state.quiz.answers.filter((answer) => answer.isCorrect))

  const dispatch = useDispatch()

  const restart = () => {
      dispatch(quiz.actions.restart())
  }


  return (
    <section>
        <h1>Congratulations! You made it to the end of the quiz</h1>
        <h2>{`You've got ${correctAnswers.length} out of 5`}</h2>

        <button onClick={ restart }>RESTART</button>
    </section>
)
}

