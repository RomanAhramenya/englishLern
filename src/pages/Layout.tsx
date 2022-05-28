import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomLink from '../components/CustomLink/CustomLink'
import Header from './Header'

function Layout() {
  return (
    <div className='MainContainer'>
        <Header/>
        <nav>
            <CustomLink to='/'>Урок №1</CustomLink>
            <CustomLink to='/lesson2'>Урок №2</CustomLink>
            <CustomLink to='/lesson3'>Урок №3</CustomLink>
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