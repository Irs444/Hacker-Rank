import Recat, { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
// import './App.css'
import Navbar from './components/user/Navbar'
import Home from './components/user/Home'
import Topics from './components/admin/Topics'
import Questions from './components/admin/Questions'

import Solutions from './components/admin/Solutions'
import Certificate from './components/admin/Certificate'
import Navbar1 from './components/admin/Navbar1'
import Ctest from './components/admin/Ctest'
import CtestForm from './components/admin/CtestForm'
import Taketest from './components/admin/Taketest'
import Compete from './components/admin/Compete'
import ManageContest from './components/admin/ManageContest'
import CreateContest from './components/admin/CreateContest'
import JobDashboard from './components/admin/JobDashboard'

function App() {


  return (
    <>
      <BrowserRouter>
        {/* <Navbar/> */}
        <Navbar1 />
       
        <Routes>
          
          
            <Route path='/topics' element={<Topics />} />
            <Route path='/questions' element={<Questions />} />
            <Route path='/home' element={<Home />} />
            <Route path='/solutions' element={<Solutions />} />
            <Route path='/certificate' element={<Certificate />} />
            <Route path='/ctest' element={<Ctest />} />
            <Route path='/ctestform' element={<CtestForm />} />
            <Route path='/test' element={<Taketest />} />
            <Route path='/compete' element={<Compete />} />
            <Route path='/managecontest' element={<ManageContest />} />
            <Route path='/createcontest' element={<CreateContest />} />
            <Route path='/dashboard' element={<JobDashboard />} />
       

          
           

    


        </Routes>
      
      </BrowserRouter>

    </>
  )
}

export default App
