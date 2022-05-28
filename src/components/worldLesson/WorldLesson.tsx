import React, { FC } from 'react'
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
                    return <tr key={el.id}><td>{el.world}</td><td>{el.translate}</td><td><button>+</button></td></tr>
                })}   
                    </tbody>
                <tfoot></tfoot>
            </table>

        </div>
    )
}

export default WorldLesson
