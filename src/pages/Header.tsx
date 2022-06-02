import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CustomLink from '../components/CustomLink/CustomLink'
import { useAppSelector } from '../hooks/redux-hook'
import { useOutSideClick } from '../hooks/useOutSideClick'

function Header() {
  const user = useAppSelector(state => state.user)
  const [modal, setModal] = useState(false)
  const tooltipRef = useRef<null | HTMLParagraphElement>(null)
  const handlerClick = () => {
    setModal(false)
  }
  useOutSideClick(tooltipRef, handlerClick, modal)
  const buttonHandler = () => {
    setModal(!modal)
    console.log(modal)
  }
  return (
    <header>
      {user.user.email ? <><span>{user.user.email}</span><button>Выйти</button></> : <><Link to='/login'>Войти</Link> <Link to='/regestration'>Регистрация</Link></>}
        <div ref={tooltipRef} className='burger'>
        <button onClick={() => buttonHandler()} >&#9776;</button>
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