import Recat, { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
// import './App.css'
import Navbar from './components/user/Navbar'
import Home from './components/user/Home'
import Topics from './components/admin/Topics'
import Questions from './components/admin/Questions'
import Solution from './components/admin/Solution'
import Solutions from './components/admin/Solutions'
import Certificate from './components/admin/Certificate'

function App() {
  

  return (
    <>
     <BrowserRouter>
     {/* <Navbar/> */}
     <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/topics' element={<Topics/>} />
     <Route path='/questions' element={<Questions/>} />
     <Route path='/solution' element={<Solution/>} />
     <Route path='/solutions' element={<Solutions/>} />
     <Route path='/certificate' element={<Certificate/>} />

     </Routes>
     </BrowserRouter>

    </>
  )
}

export default App
