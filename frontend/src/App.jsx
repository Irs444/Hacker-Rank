import Recat, { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
// import './App.css'
import Navbar from './components/user/Navbar'
import Home from './components/user/Home'
import Topics from './components/admin/Topics'
import Questions from './components/admin/Questions'

import Solutions from './components/admin/Solutions'
import Certificate from './components/admin/Certificate'
// import Navbar1 from './components/user/Navbar1'
import Ctest from './components/admin/Ctest'
import CtestForm from './components/admin/CtestForm'
import Taketest from './components/admin/Taketest'
import Compete from './components/admin/Compete'
import ManageContest from './components/admin/ManageContest'
import CreateContest from './components/admin/CreateContest'
import JobDashboard from './components/admin/JobDashboard'
import Signup from './components/user/Signup'
import Login from './components/user/Login'
import { UserProvider } from './context/UserContext'

function App() {


  return (
    <>
      <BrowserRouter>
      <UserProvider>
        {/* <Navbar/> */}
        
       
        <Routes>
          
        <Route path='/' element={<Home />} />
            <Route path='topics' element={<Topics />} />
            <Route path='questions' element={<Questions />} />
           <Route path='signup' element={<Signup />} />
           <Route path='login' element={<Login />} />

            <Route path='solutions' element={<Solutions />} />
            <Route path='certificate' element={<Certificate />} />
            <Route path='ctest' element={<Ctest />} />
            <Route path='ctestform' element={<CtestForm />} />
            <Route path='test' element={<Taketest />} />
            <Route path='compete' element={<Compete />} />
            <Route path='managecontest' element={<ManageContest />} />
            <Route path='createcontest' element={<CreateContest />} />
            <Route path='dashboard' element={<JobDashboard />} />
       

          
           

    


        </Routes>
        </UserProvider>
      </BrowserRouter>

    </>
  )
}

export default App
