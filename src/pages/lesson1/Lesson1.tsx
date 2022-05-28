import React from 'react'
import { FC } from 'react'
import TableWorldVerb from '../../components/tableWordVerb/TableWorldVerb'
import WorldLesson from '../../components/worldLesson/WorldLesson'
import s from './Lesson1.module.scss'
const url = 'https://youtu.be/LrhyihlqB-U?list=PL66DIGaegedqtRaxfVsk6vH5dBDuL5w92'
const worlds = [
  {id:1,world:'love',translate:'любить'},
  {id:2,world:'live',translate:'жить'},
  {id:3,world:'like',translate:'нравится'},
  {id:4,world:'open',translate:'открыть'},
  {id:5,world:'close',translate:'закрыть'},
  {id:6,world:'start',translate:'начинать'},
  {id:7,world:'finish',translate:'заканчивать'},
  {id:8,world:'see(saw)',translate:'видеть'},
  {id:9,world:'come(came)',translate:'приходить'},
  {id:10,world:'go(went)',translate:'идти'},
  {id:11,world:'know(knew)',translate:'знать'},
  {id:12,world:'think(thought)',translate:'думать'},

]
const Lesson1:FC = () => {
  return (
    <div className={s.container}>
      <div className='flex'>
        <div className='video'>
      <iframe  src="https://www.youtube.com/embed/9blL5gYzsaA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div className='title__lesson' >
      <h1>Урок №1</h1>
      <p>В первом уроке Дмитрия Петрова, вы узнаете о правильных и неправильных глаголах и о основной базовой схеме в его методике изучения английского языка. Уже на старте обучения вы научитесь строить простые английские предложения для того, чтобы спрашивать, задавать вопросы и утверждать, используя при этом короткие английские фразы.</p>
      </div>
      
      </div>
      <div className='flex_block'>
        <TableWorldVerb/>
      <WorldLesson data={worlds}/>
      </div>
      
    </div>
  )
}

export default Lesson1