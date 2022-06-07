import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CustomLink from '../components/CustomLink/CustomLink'
import { useAppDispatch, useAppSelector } from '../hooks/redux-hook'
import { useOutSideClick } from '../hooks/useOutSideClick'
import {removeUser} from './../store/slice/AuthSlice'
function Header() {
  const user = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()
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
        <div ref={tooltipRef} className='burger'>
        <button onClick={() => buttonHandler()} >&#9776;</button>
        {modal && <div className='desctop_modal'>
          <CustomLink to='/'>Урок №1</CustomLink>
          <CustomLink to='/lesson2'>Урок №2</CustomLink>
          <CustomLink to='/lesson3'>Урок №3</CustomLink>
        </div>}
      </div>
      <div>
      {user.user.email ? <><span className='user'>{user.user.email}</span><button className='removeUser' onClick={()=>dispatch(removeUser())}>Выйти</button></> : <><Link className='authButton'  to='/login'>Войти</Link> <Link className='authButton' to='/regestration'>Регистрация</Link></>}
      </div>
      
    </header>
  )
}

export default Header