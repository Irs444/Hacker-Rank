import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ManageContest = () => {

    const navigate = useNavigate();

    const contestpage = () => {
        navigate('/createcontest');
    }
  return (
    <div>
        <div className="container">
            <h2 className='my-3'>Administration</h2>
        </div>
        <hr />
        <div className="container d-flex justify-content-between">
            <div>
                <span>Manage Contest</span>
                <span className='ms-3'>Manage Challeges</span>
            </div>
            <div>
                <input type="search" className='form-control w-75' />
            </div>
        </div>
        <hr />
        <div className="container d-flex justify-content-between">
            <div>
            <span>Contests you can edit are below. For more info, visit our<span className='text-primary'> FAQ</span> or join our<span className='text-primary'> discussion forum. </span></span>
            </div>
            <div>
                <button className='btn btn-success fw-bold' onClick={contestpage}>Create Contests</button>
            </div>
        </div>
        <div className="container ">
            <div className="row ">
             <div className="col border border-dark m-5" style={{height:"20rem"}}></div>
            </div>
        </div>
        <div className="container">
           
           <div className="links d-flex justify-content-center my-3">
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
  )
}

export default ManageContest