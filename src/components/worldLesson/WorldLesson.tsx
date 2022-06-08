import React, { FC } from 'react'
import { useAppDispatch } from '../../hooks/redux-hook'
import { setWorld } from '../../store/slice/WorldAction'
import s from './WorldLesson.module.scss'
interface Idata {
    id: number
    world: string
    translate: string
}
interface IProps {
    data: Idata[]
}

const WorldLesson: FC<IProps> = ({ data }) => {
    const dispatch = useAppDispatch()
    const auth = localStorage.getItem('id')
    const buttonHandler = (world:string,translate:string,id:string) => {
        if(auth){
            
            dispatch(setWorld({id:auth,world:{world,translate,id}}))
        }
    }
    return (
        <div className={s.container}>
            <table>
                <caption>Слова из урока</caption>
                <thead>
                    <tr>
                        <th>Слово(en)</th>
                        <th>Перевод</th>
                    </tr>
                </thead>
                    <tbody>
                     {data.map(el => {
                    return <tr key={el.id}><td>{el.world}</td><td>{el.translate}</td><td><button onClick={() => buttonHandler(el.world,el.translate,String(el.id))}>+</button></td></tr>
                })}   
                    </tbody>
                <tfoot></tfoot>
            </table>

        </div>
    )
}

export default WorldLesson
