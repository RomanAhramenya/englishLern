import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import s from './Form.module.scss'

interface IForm {
    title:string
    link:string 
    linkName:string 
    action:(email:string,password:string) => void
}
const Form:FC<IForm> = (props) => {
    const {title,link,linkName,action} = props
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [errorEmail,setErrorEmail] = useState('')
  const [errorPassword,setErrorPassword] = useState('')
  const [isEmailTouched,setIsEmailTouched] = useState(false)
  const [isPasswordTouched,setIsPasswordTouched] = useState(false)
  
  
  
  const emailHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.currentTarget.value)
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(!reg.test(String(e.currentTarget.value).toLowerCase())){
        setIsEmailTouched(true)
      setErrorEmail('не корректный email')
    } else {
      setErrorEmail('')
    }
  }
  const passwordHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.currentTarget.value)
    
    if(e.currentTarget.value.length < 8){
        setIsPasswordTouched(true)
      setErrorPassword('Пароль должен быть не меньше 8 символов')
    } else {
      setErrorPassword('')
    }
  }
  const onBlurHandler: React.FocusEventHandler<HTMLInputElement> = (e) => {
  
    switch (e.target.name) {
      case 'email':
        if(!email){
          setIsEmailTouched(true)
          setErrorEmail('поле не может быть пустым')
        }
        break;
        case 'password':
          if(!password){
            setIsPasswordTouched(true)
            setErrorPassword('поле не может быть пустым')
          }
          
          break;
      default:
        break;
    }
   }
   const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
     e.preventDefault()
     action(email,password)
   }
  return (
    <div className={s.container}>
    <h1>{title}</h1>
      <form onSubmit={e => handleSubmit(e)}>
      <div className={s.input_container}>
        {(isEmailTouched && errorEmail) && <div className={s.error}>&#9888; {errorEmail}</div>}
        <input value={email} onChange={e=>emailHandler(e)}  onBlur={e=>onBlurHandler(e)} name='email' type='text' placeholder='Email'/>
      </div>
      <div className={s.input_container}>
      {(isPasswordTouched && errorPassword) && <div className={s.error}>&#9888; {errorPassword}</div>}
        <input value={password} onChange={e=>passwordHandler(e)} onBlur={e=>onBlurHandler(e)} name='password' type='password' placeholder='Password'/>
      </div>
      <div>
        <input  type='submit' value='login'/>
        <Link to={link}>&rarr; {linkName}</Link>
      </div>
        
        
        
      </form>
    </div>
  );
}

export default Form;