import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'

import { Summary } from 'components/Summary'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import caturday from 'assets/caturday.jpg'
import coffee from 'assets/coffee.jpg'
import island from 'assets/island.jpg'
import question1 from 'assets/question1.jpg'
import concert from 'assets/concert.jpg'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const answer = useSelector((state) => state.quiz.answers.filter((a) => a.isCorrect))
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
     return 'correct'
   }
  else {
    return 'Sorry, that´s wrong'
  }
 }

 //An image selector that would show the image according to the question we are on

 const imageSelector = () => {
  if (question.id === 1) {
    return question1
  } else if (question.id === 2) {
    return island
  } else if (question.id === 3) {
    return concert
  } else if (question.id === 4) {
    return coffee
  } else if (question.id === 5) {
    return caturday
  }
 }


  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  if (quizOver === true) {
    return <Summary />
  }

  return (
    <>
    <Header/>
    <section className="main-container">
      <div className="question-wrapper">
        <h1>Question: {question.questionText}</h1>
        <img className="question-image" src={imageSelector()} alt="question pic" />
      </div>
      <div className="answer-wrapper">
        {question.options.map((option, index) => {
          return (
          
          
            <label key={index} htmlFor={index}>
              <input 
                name="answer"
                id={index}
                value={index}
                type="radio"
                onChange={() => { checkAnswer(question.id, index) }}
              />
              {option}
            </label>
          
        )})}
      </div>
      

  

        <p>Question {question.id}/5</p>
       
        
      <button className="next-question-button" onClick={() => dispatch(quiz.actions.goToNextQuestion())}>NEXT</button>
    </section>
    <Footer />
    </>
  )
  
}

