import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './pages/Layout';
import Lesson1 from './pages/lesson1/Lesson1';
import Lesson2 from './pages/lesson2/Lesson2';
import Lesson3 from './pages/lesson3/Lesson3';


function App() {
  return (
   <Routes >
     <Route path='/' element={<Layout/>}>
        <Route index element={<Lesson1/>}/>
        <Route path='lesson2' element={<Lesson2/>}/>
        <Route path='lesson3' element={<Lesson3/>}/>
     </Route>
   </Routes>
  );
}

export default App;
