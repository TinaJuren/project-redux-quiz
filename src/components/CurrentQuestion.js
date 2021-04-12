import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const answer = useSelector((state) => state.quiz.answers.find((a) => a.questionId === question.id))
  const quizOver = useSelector((state) => state.quiz.quizOver);

 const dispatch = useDispatch();

 const submitAnswer = (id, index) => {
   dispatch(quiz.actions.submitAnswer({
     questionId:id,
     answerId:index

   }))
 }

 const checkAnswer = () => {
   if (answer.isCorrect) {
     return <h2>It´s correct</h2>
   }
  else {
    return <h2>Sorry, try again, that was wrong.</h2>
  }
 }


  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <section className="main-container">
      <div className="question-wrapper">
        <h1>Question: {question.questionText}</h1>
      </div>
      <div className="answer-wrapper">
        {question.options.map((option, index) => {
          return (
          
          <fieldset>
            <label key={index} htmlFor={index}>
              <input 
                name="answer"
                id={index}
                value={index}
                type="radio"
                onChange={submitAnswer(question.id, index)} 
              />
              {option}
            </label>
          </fieldset>  
        )})}
      </div>
      <button onClick={() => dispatch(quiz.actions.goToNextQuestion())}></button>
      Go to next Question
    </section>
  )
}

