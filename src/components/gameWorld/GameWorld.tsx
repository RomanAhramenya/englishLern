import React, { FC, useState } from 'react'
import { IWorld } from '../../store/slice/WorldAction'
import s from './GameWorld.module.scss'
interface IArray{
    world:string
    translate:string
}
interface IGame {
    arrayWorldTrain:IArray[]
    setIsTrain:(bool:boolean)=>void
        setIsStartTrain:(bool:boolean)=>void
        setArrayWorldTrain:()=>void
}
const GameWorld:FC<IGame> = ({arrayWorldTrain,setIsTrain,setIsStartTrain,setArrayWorldTrain}) => {
    const [value,setValue] = useState('')
    const [question,setQuestion] = useState(1)
    const [response,setResponse] = useState(false)
    function getRandomInt(min:number, max:number) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      
    const nextHandler = () =>{
        setQuestion(getRandomInt(1,arrayWorldTrain.length))
        setResponse(false)
        setValue('')
    }
    const endHandler = () => {
        setValue('')
        setResponse(false)
        setIsTrain(false)
        setIsStartTrain(false)
        setArrayWorldTrain()
    }
  return (
    
      <div className={s.gameBoard}>
               <span>слово: "{arrayWorldTrain[question].translate}"</span> <input placeholder='Ответ' value={value} onChange={e => setValue(e.currentTarget.value)} type='text'/> 
                <button onClick={()=>setResponse(true)}>ответить</button><button onClick={()=>nextHandler()} >следующий вопрос</button>
                <button onClick={()=>endHandler()} >Завершить</button>
                {response && <span>Результат: {value.toLowerCase() === arrayWorldTrain[question].world ? 'верно' : 'не верно'}</span>}
                </div>
   
  )
}

export default GameWorld
