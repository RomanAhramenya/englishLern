import React, { useState } from 'react'
import { FC } from 'react'
import EndScreen from './EndScreen'
import Game from './Game'
import Menu from './Menu'
import { QuizContext } from './QuizContext'
import s from './Quiz.module.css'
export interface IData{
    prompt:string
    optionA:string,
    optionB:string,
    optionD:string,
    optionC:string,
    answer:string
}
export interface IProps {
    data: IData[]
}
const Quiz:FC<IProps> = ({data}) => {
    const [page,setPage] = useState('menu')
    const [score,setScore] = useState(0)
    
  return (
    <div className={s.App}>
    <QuizContext.Provider value={{
      page,
      setPage,
      score,
      setScore,
    }}>
      {page === 'menu' && <Menu/>}
      {page === 'game' && <Game data={data}/>}
      {page === 'end' && <EndScreen length={data.length}/>}
    
    </QuizContext.Provider>
    
    </div>
  )
}

export default Quiz