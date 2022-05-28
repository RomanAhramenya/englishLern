import React, { useContext } from 'react'
import { AppContextInterface, QuizContext } from './QuizContext'
import s from './Quiz.module.css'

function Menu() {
    const {setPage} = useContext(QuizContext) as AppContextInterface

   
    function handleClick() {
            setPage("game")
    }
  return (
    <div className={s.Menu}>
        <button onClick={()=>handleClick()}>Начать тест</button>
    </div>
  )
}

export default Menu