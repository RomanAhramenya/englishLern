import React, { FC, useRef, useState } from 'react'
import { useOutSideClick } from '../../hooks/useOutSideClick'


import s from './AddWorldForm.module.scss'
interface IAddWorld{
    action:(world: string, translate: string, id: string)=>void
}
const AddWorldForm:FC<IAddWorld> = ({action}) => {
    const tooltipRef = useRef<null | HTMLParagraphElement>(null)
    const [isAdd,setIsAdd] = useState(false)
    const [value1,setValue1] = useState('')
    const [value2,setValue2] = useState('')
    const date =  Date.now()
   const handlerAddWorld = () => {
       
       action(value1,value2,String(date))
        setValue1('')
        setValue2('')
   }
   const handleOutSide = () => {
       setIsAdd(false)
   }
   useOutSideClick(tooltipRef,handleOutSide,isAdd)
  return (
    <div ref={tooltipRef} className={s.container}>
        <div className={s.buttonAdd}>
            <button onClick={() => setIsAdd(!isAdd)}>Добавить слова</button>
        </div>
        {
            isAdd && 
            <div className={s.form}>
                <label  htmlFor='world'>Слово(en)</label><input onChange={e => setValue1(e.currentTarget.value)} value={value1} id='world' type='text'/>
                <label htmlFor='translate'>Перевод</label><input onChange={e => setValue2(e.currentTarget.value)} value={value2} id='translate' type='text'/>
                <button disabled={!value1 || !value2} onClick={()=> handlerAddWorld()}>Добавить</button>
            </div>
        }
    </div>
  )
}

export default AddWorldForm