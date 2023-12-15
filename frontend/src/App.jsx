import Recat, { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
// import './App.css'
import Navbar from './components/user/Navbar'
import Home from './components/user/Home'
import Topics from './components/admin/Topics'
import Questions from './components/admin/Questions'

import Solutions from './components/admin/Solutions'
import Certificate from './components/admin/Certificate'
import Navbar1 from './components/admin/Navbar1'

function App() {
  

  return (
    <>
     <BrowserRouter>
     {/* <Navbar/> */}
     <Navbar1/>
     <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/topics' element={<Topics/>} />
     <Route path='/questions' element={<Questions/>} />
     
     <Route path='/solutions' element={<Solutions/>} />
     <Route path='/certificate' element={<Certificate/>} />

     </Routes>
     </BrowserRouter>

    </>
  )
}

export default App
