import React, { useContext, useState } from 'react'
import { FC } from 'react'

import { IProps } from './Quiz'
import { AppContextInterface, QuizContext } from './QuizContext'
import s from './Quiz.module.css'

const Game:FC<IProps> = ({data}) => {
    const {setPage,score,setScore} = useContext(QuizContext) as AppContextInterface
    const [currentQuestion,setCurrentQustion] = useState(0)
    const [choice,setChoce] = useState("")
    
    function choiceAnswer(variant:string){
        setChoce(variant)
    }
    function nextHandler() {
        if (data[currentQuestion].answer === choice){
            setScore(score +1)
        }
        
        setCurrentQustion(currentQuestion + 1)
    }
    function finish() {
        if (data[currentQuestion].answer === choice){
            setScore(score +1)
        }
        setPage('end')
    
    }
  return (
    <div className={s.Game}>
        <h1>{data[currentQuestion].prompt}</h1>
        <button onClick={()=>choiceAnswer('optionA')}>{data[currentQuestion].optionA}</button>
        <button onClick={()=>choiceAnswer('optionB')}>{data[currentQuestion].optionB}</button>
        <button onClick={()=>choiceAnswer('optionC')}>{data[currentQuestion].optionC}</button>
        <button onClick={()=>choiceAnswer('optionD')}>{data[currentQuestion].optionD}</button>
       {currentQuestion === data.length - 1 ? <button onClick={finish}>Закончить тест</button> :
       <button onClick={nextHandler}>Следующий вопрос</button>}
        
    </div>
  )
}

export default Game