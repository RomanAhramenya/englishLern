import React, { useRef, useState } from 'react'
import CustomLink from '../components/CustomLink/CustomLink'
import { useOutSideClick } from '../hooks/useOutSideClick'

function Header() {
  
    const [modal,setModal] = useState(false)
    const tooltipRef = useRef<null | HTMLParagraphElement>(null)
    const handlerClick = () => {
        setModal(false)
    }
    useOutSideClick(tooltipRef,handlerClick,modal)
    const buttonHandler = () =>{
        setModal(!modal)
        console.log(modal)
    }
  return (
    <header>
       <div ref={tooltipRef} className='burger'>
            <button onClick={()=>buttonHandler()} >&#9776;</button>
             {modal && <div className='desctop_modal'>
            <CustomLink to='/'>Урок №1</CustomLink>
            <CustomLink to='/lesson2'>Урок №2</CustomLink>
            <CustomLink to='/lesson3'>Урок №3</CustomLink>
          </div>} 
          </div>
    </header>
  )
}

export default Header