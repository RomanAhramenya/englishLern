import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { useAppDispatch } from './hooks/redux-hook';
import LoginPage from './pages/authorization/LoginPage';
import RegisterPage from './pages/authorization/RegistrationPage';
import Layout from './pages/Layout';
import Lesson1 from './pages/lesson1/Lesson1';
import Lesson2 from './pages/lesson2/Lesson2';
import Lesson3 from './pages/lesson3/Lesson3';
import World from './pages/World/World';
import { getUser } from './store/slice/AuthAction';


function App() {
  const dispatch = useAppDispatch()

  useEffect(()=>{
    const id = localStorage.getItem("id")
    if(id !== undefined && id !== null){
      
      dispatch(getUser(id))
    }
    
  },[])
  return (
   <Routes >
     <Route path='/' element={<Layout/>}>
        <Route index element={<Lesson1/>}/>
        <Route path='regestration' element={<RegisterPage/>}/>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='lesson2' element={<Lesson2/>}/>
        <Route path='lesson3' element={<Lesson3/>}/>
        <Route path='worlds' element={<World/>}/>
     </Route>
   </Routes>
  );
}

export default App;
