import React, { FC, useState } from 'react'
import { IWorld } from '../../store/slice/WorldAction'
import Quiz from '../quiz/Quiz'
import s from './WorldList.module.scss'
interface IWorldList {
    dataWorld: IWorld[]
    currentPage: number
    action: (idWorld: string) => void
}
interface ITrain {
    world:string
    translate:string
}
const WorldList: FC<IWorldList> = ({ dataWorld, currentPage, action }) => {
    const [value,setValue] = useState('')
    const [response,setResponse] = useState(false)
    const [isTrain, setIsTrain] = useState(false)
    const [isStartTrain, setIsStartTrain] = useState(false)
    const [arrayWorldTrain, setArrayWorldTrain] = useState([{world:'',translate:''}])
    const [question,setQuestion] = useState(1)
    const addTrainWorld = (world: string, translate: string) => {
        setArrayWorldTrain([...arrayWorldTrain,{world,translate}])
      
    }
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
        setArrayWorldTrain([])
    }
    const deleteHandler = (el:string) =>{
        setArrayWorldTrain(arrayWorldTrain.filter(item => item.world !== el))
    
    }
    return (
        <div className={`${s.worlds} ${isTrain && s.trainStart}`}>
            {dataWorld.map((el, index) => {
                if (index + 1 <= currentPage * 10 && index + 1 > (currentPage * 10 - 10))
                    return <div onDoubleClick={()=> isTrain && deleteHandler(el.world)} onClick={()=> isTrain && addTrainWorld(el.world,el.translate)}  className={`${s.world} ${arrayWorldTrain.find(item => item.world === el.world) && s.active}`} key={index}>
                        <div>
                            <span>{index + 1}. {el.world}</span>
                            <span>----</span>
                            <span>{el.translate}</span>
                        </div>
                        <button onClick={() =>action(el.id)}>Удалить</button>
                    </div>
            })}
            <span onClick={() => setIsTrain(!isTrain)} className={s.train}>Тренировка слов</span>
            {isTrain && <div className={s.start_train_info}><span>Выберите слова(Двойной клик для отмены слова)</span> <button disabled={!arrayWorldTrain.length} onClick={()=>setIsStartTrain(true)}>начать</button></div>}
            {isStartTrain && <div className={s.gameBoard}>
               <span>слово: "{arrayWorldTrain[question].translate}"</span> <input placeholder='Ответ' value={value} onChange={e => setValue(e.currentTarget.value)} type='text'/> 
                <button onClick={()=>setResponse(true)}>ответить</button><button onClick={()=>nextHandler()} >следующий вопрос</button>
                <button onClick={()=>endHandler()} >Завершить</button>
                {response && <span>Результат: {value.toLowerCase() === arrayWorldTrain[question].world ? 'верно' : 'не верно'}</span>}
                </div>}
        </div>
    )
}

export default WorldList
