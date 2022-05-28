import React, { useContext } from 'react'
import { FC } from 'react'
import { AppContextInterface, QuizContext } from './QuizContext'
import s from './Quiz.module.css'
interface IProps{
    length:number
}
const EndScreen:FC<IProps> = ({length}) => {
    const {score,setPage,setScore} = useContext(QuizContext) as AppContextInterface
    function reset() {
        setPage('menu')
        setScore(0)
    }
  return (
    <div className={s.End}>
        <h1>счет</h1>
        <div>{score} / {length}</div>
        <button onClick={reset}>Начать заново</button>
    </div>
  )
}

export default EndScreen