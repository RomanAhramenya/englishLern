import React from 'react'
import { FC } from 'react'
import Quiz from '../../components/quiz/Quiz'
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
const data = [
  {
    prompt: "4 + 5 = ?",
    optionA:"10",
    optionB:"33",
    optionD:"9",
    optionC:"7",
    answer:"optionD"
},
{
    prompt: "14 + 5 = ?",
    optionA:"19",
    optionB:"33",
    optionD:"20",
    optionC:"7",
    answer:"optionA"
},
{
    prompt: "4 * 5 = ?",
    optionA:"10",
    optionB:"20",
    optionD:"9",
    optionC:"7",
    answer:"optionB"
}
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
      <button className='scroll_button'><a href="#tra">Тренеровка</a></button>
      </div>
      
      </div>
      
      <div className='flex_block'>
        <TableWorldVerb/>
      <WorldLesson data={worlds}/>
      </div>
      <div id='tra'>
        <Quiz data={data}/>
      </div>
      
    </div>
  )
}

export default Lesson1