import React from 'react'
import {  useNavigate } from 'react-router-dom'
import Navbar1 from '../admin/Navbar1'


const Topics = () => {
    const navigate = useNavigate();

    const nextpage = () => {
        navigate('/questions')
    }
  return (
    <div>
        <Navbar1/>
        <div className="container">
            <div className="content">
            
           <div className="item d-flex justify-content-between my-5">
            <h1>Prepare</h1>
            <a className='p-3' href="">Bookmarked Challenges</a>
           </div>

            </div>
        </div>
        <hr />
        <div className="container">
            <div className="content">
                <div className="item">
                    <h5>Your Preparation</h5>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="card my-3" style={{width:"30rem"}}>
                <div className="card-header">
                    <p>PREPARE BY TOPIC</p>
                    <h2>Problem Solving</h2>
                </div>
                {/* <hr /> */}
                <div className="card-body">
                    <p>30% Get to 30 point to unlock this badge</p>
                    <button className='btn btn-success' onClick={nextpage}>Continue Preparation</button>
                </div>
            </div>
        </div>
        <div className="container my-5">
            <div className="content">
                <h3>Preparation Kits</h3>
            <div className="row">
                <div className="col">
                   <div className="card" onClick={nextpage}>
                    <div className="card-body">
                        <h3>1 Week Preparation Kit</h3>
                        <span>Challenges:21,Attempt:2344,Mock Test:6</span>
                         <div className="item my-2">
                         <button className='btn btn-light'>Problem Solving(Basic)</button>
                         <button className='btn btn-light'>Problem Solving(Intermediate)</button>
                         </div>
                    </div>
                   
                   </div>
                </div>
                <div className="col">
                <div className="card " onClick={nextpage}>
                    <div className="card-body">
                        <h3>1 Month Preparation Kit</h3>
                        <span>Challenges:21,Attempt:5433,Mock Test:4</span>
                         <div className="item my-2">
                         <button className='btn btn-light'>Problem Solving(Basic)</button>
                         <button className='btn btn-light'>Problem Solving(Intermediate)</button>
                         </div>
                    </div>
                   
                   </div>
                </div>
            </div>
            </div>
        </div>
        <div className="container">
            <div className="content">
                <h2>Prepare By Topic</h2>
            </div>
           
            <div className="row border p-4 " onClick={nextpage}>
                <div className="col">Algorith</div>
                <div className="col">DataStructure</div>
                <div className="col">Mathematics</div>
            </div>
            <div className="row border p-4 " onClick={nextpage}>
                <div className="col">Artificial Intelligence</div>
                <div className="col">C</div>
                <div className="col">C++</div>
            </div>
            <div className="row border p-4 " onClick={nextpage}>
                <div className="col">Java</div>
                <div className="col">Python</div>
                <div className="col">Ruby</div>
            </div>
            </div>
        
        <div className="container my-5">
            <div className="content">
                <div className="card" style={{backgroundColor:"blue"}}>
                    <div className="card-body">
                        <p className='text-light' >NEW</p>
                        <h2 className='text-light' >Create a Job Winning resume</h2>
                        <p className='text-light' >Boost your chances of landing that dream job by building fine-tuned latex<br/>resumes that stand out</p>
                         <button className='btn btn-light px-3'>Create Your Resume</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="content ">
                <div className="links d-flex justify-content-center">
                <a className='mx-2' href="">Blog</a>
                <a  className='mx-2' href="">Scoring</a>
                <a  className='mx-2' href="">Environment</a>
                <a  className='mx-2' href="">FAQ</a>
                <a  className='mx-2' href="">About Us</a>
                <a  className='mx-2' href="">Careers</a>
                <a  className='mx-2' href="">Terms of Service</a>
                <a  className='mx-2' href="">Privacy Policy</a>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Topics