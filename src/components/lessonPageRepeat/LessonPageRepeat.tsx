import React, { FC } from 'react'
import Quiz, { IData } from '../quiz/Quiz'
import s from './LessonPageRepeat.module.scss'
interface IRepeat {
title:string     
url:string
paragaph:string
children:React.ReactNode
state:IData[]
}
const LessonPageRepeat:FC<IRepeat> = ({title,url,paragaph,children,state}) => {
  return (
    <>
          <div className='flex'>
        <div className='video'>
      <iframe  src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div className='title__lesson' >
      <h1>{title}</h1>
      <p>{paragaph}</p>
      <button className='scroll_button'><a href="#tra">Тренеровка</a></button>
      </div>
      </div>
        {children}
      <div id='tra'>
        <Quiz data={state}/>
      </div>
    </>
     
    
  )
}

export default LessonPageRepeat