import React from 'react'
import { FC } from 'react'
import LessonPageRepeat from '../../components/lessonPageRepeat/LessonPageRepeat'
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
      <LessonPageRepeat 
      title='Урок №1'
      url='https://www.youtube.com/embed/9blL5gYzsaA'
      paragaph='В первом уроке Дмитрия Петрова, вы узнаете о правильных и неправильных глаголах и о основной базовой схеме в его методике изучения английского языка. Уже на старте обучения вы научитесь строить простые английские предложения для того, чтобы спрашивать, задавать вопросы и утверждать, используя при этом короткие английские фразы.'
      state={data}
     >
        <div className='flex_block'>
        <TableWorldVerb/>
      <WorldLesson data={worlds}/>
      </div>
      </LessonPageRepeat>
    
    </div>
  )
}

export default Lesson1