import React from 'react'
import Home from './components/Home/Home'
import Landingpage from './components/hiringpage/Landingpage'
import Internshipform from './components/hiringpage/Inputforms/Internshipform'


import {
  BrowserRouter,
  Route,Routes,
  RouterProvider,
} from "react-router-dom";
import Register from './components/loginandregister/Register';
import Login from './components/loginandregister/Login';
import Hiring from './components/Hiring/Hiring';
import FullTime1 from './components/hiringpage/FullTime1';
import FullTime2 from './components/hiringpage/FullTime2';
import Internships from './components/hiringpage/Internships';

export default function App() {
  return (
    <BrowserRouter>
   <Routes>
    <Route path='/'>
      <Route index element={ <Home />} />
      <Route path='register' element={<Register/>} />
      <Route path='login' element={<Login/>} />
      <Route path='hiring' element={<Hiring/>} />
      <Route path='Landingpage' element={<Landingpage/>} />
      <Route path='fulltime1' element={<FullTime1/>} />
      <Route path='fulltime2' element={<FullTime2/>} />
      <Route path='internship' element={<Internships/>} />
      <Route path='internshipform' element={<Internshipform/>} />
      
      
     

    </Route>
   </Routes>



   </BrowserRouter>
  )
}
