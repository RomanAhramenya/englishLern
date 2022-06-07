
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from '../../components/form/Form'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hook'
import { loginUser } from '../../store/slice/AuthAction'
import s from './Auth.module.scss'

function LoginPage() {
  const error = useAppSelector(state => state.user.error)
  const dispatch = useAppDispatch()
  const setLogin =  (email: string, password: string) => {
    dispatch(loginUser({ email, password }))
  }
  console.log(error)
  return (
    <div className={s.container}>
      <Form action={setLogin} title='Войти' link='/register' linkName='регестрация' />
      {error && <div className={s.error}>{error}</div>}

    </div>

  )
}

export default LoginPage