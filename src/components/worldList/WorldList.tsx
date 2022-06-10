import React, { FC, useState } from 'react'
import { IWorld } from '../../store/slice/WorldAction'
import GameWorld from '../gameWorld/GameWorld'
import s from './WorldList.module.scss'
interface IWorldList {
    dataWorld: IWorld[]
    currentPage: number
    action: (idWorld: string) => void
}
const WorldList: FC<IWorldList> = ({ dataWorld, currentPage, action }) => {
    const [isTrain, setIsTrain] = useState(false)
    const [isStartTrain, setIsStartTrain] = useState(false)
    const [arrayWorldTrain, setArrayWorldTrain] = useState([{world:'',translate:''}])
    
    const addTrainWorld = (world: string, translate: string) => {
        setArrayWorldTrain([...arrayWorldTrain,{world,translate}])
      
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
            {isStartTrain && <GameWorld arrayWorldTrain={arrayWorldTrain} setIsTrain={setIsTrain} setIsStartTrain={setIsStartTrain} setArrayWorldTrain={()=>setArrayWorldTrain([])}/>}
        </div>
    )
}

export default WorldList
