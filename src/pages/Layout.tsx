import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomLink from '../components/CustomLink/CustomLink'
import { useAuth } from '../hooks/useAuth'
import Header from './Header'

function Layout() {
  const auth = useAuth()
  return (
    <div className='MainContainer'>
        <Header/>
        <nav>
          <div className='full'>
            <CustomLink to='/'>Урок №1</CustomLink>
            <CustomLink to='/lesson2'>Урок №2</CustomLink>
            <CustomLink to='/lesson3'>Урок №3</CustomLink>
            <CustomLink to={auth.isAuth ? '/worlds' : '/login'}>Словарь</CustomLink>
          </div>
        </nav>
        <main>
            <Outlet/>
        </main>
        <footer>
            footer
        </footer>
    </div>
  )
}

export default Layout