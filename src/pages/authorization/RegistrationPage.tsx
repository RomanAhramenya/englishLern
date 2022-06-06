import axios from 'axios'
import React from 'react'
import Form from '../../components/form/Form'
import { useAppDispatch } from '../../hooks/redux-hook'
import { setUser } from '../../store/slice/AuthAction'


function RegisterPage() {
    const dispatch = useAppDispatch()
    const setRegister =  (email:string,password:string) => {
       dispatch(setUser({email,password}))
    }
  return (
    <Form action={setRegister} title='Регистрация' link='/login' linkName='Войти'/>
  )
}

export default RegisterPage