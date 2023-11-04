import { useState } from 'react'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Home from './pages/Home'
import './App.css'
import {Route,Routes} from "react-router-dom";
//import Login from './pages/Login';

function App() {
  

  return (
    <>
    <Routes >
      <Route path = "/" element={<SignUp/>}></Route>
      <Route path = "/login" element={<Login/>}></Route>
      <Route path = "/home" element={<Home/>}></Route>
    </Routes>
    </>
  )
}

export default App
