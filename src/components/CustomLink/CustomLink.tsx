import React from 'react'
import { FC } from 'react'
import { NavLink, useMatch } from 'react-router-dom'

interface IProps{
    children:React.ReactNode
    to:string
}
const CustomLink:FC<IProps> = ({children,to,...props}) => {
    const match = useMatch(to)
  return (
    <NavLink to={to} {...props} style={{
        backgroundColor:match? 'rgba(0, 255, 55, 0.397)' : ''
    }}>
        {children}
    </NavLink>
  )
}

export default CustomLink