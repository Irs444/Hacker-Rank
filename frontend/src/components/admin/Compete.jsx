import React from 'react'
import { useNavigate } from 'react-router-dom';

const Compete = () => {
    const navigate = useNavigate();
    const manage = () => {
        navigate('/managecontest');
    }

    const hello = () => {
        navigate('/createcontest');
    }
  return (
    <div>
        <div className="container my-3">
            <div className='d-flex justify-content-between'>
                <div>
                    <p className='m-0'>All Contests</p>
                    <h1 className='m-0'>Contests</h1>
                </div>
                <div>
                    <button className='btn btn-light fw-bold' onClick={manage}>Manage Contest</button>
                    <button className='btn btn-success ms-3 fw-bold' onClick={hello}>Create Contest</button>
                </div>
            </div>
        </div>
        <hr />
        <div className="container">
            <h3>Active Contests</h3>
            <div className="row">
          <div className=" card col-3 my-5 border border-black ">
            <div className='my-3 ms-3'>
                <h5 className='fw-bold'>ProjectEuler+</h5>
                <p >Open Indefinitly</p>
            </div>
            <div>
                <button className='btn btn-light ms-3 my-3 fw-bold'>View Details</button>
            </div>
          </div>
            </div>
        </div>
        <div className="container">
            <h3>Archived Contests</h3>
            <div className="row gap-3">
          <div className=" card col-3 my-5 border border-black ">
            <div className='my-3 ms-3'>
                <h5 className='fw-bold'>DTT Code-A-Thon</h5>
                <p >contest ended on 29 of august 2023</p>
            </div>
            <div>
                <button className='btn btn-light ms-3 my-3 fw-bold'>View Details</button>
            </div>
          </div>
          <div className=" card col-3 my-5 border border-black ">
            <div className='my-3 ms-3'>
                <h5 className='fw-bold' >Celebrate PRIDE 2023 Coding Contest</h5>
                <p >contest ended on 29 of august 2023</p>
            </div>
            <div>
                <button className='btn btn-light ms-3 my-3 fw-bold'>View Details</button>
            </div>
          </div>
          <div className=" card col-3 my-5 border border-black ">
            <div className='my-3 ms-3'>
                <h5 className='fw-bold'>ProjectEuler+</h5>
                <p >Open Indefinitly</p>
            </div>
            <div>
                <button className='btn btn-light ms-3 my-3 fw-bold'>View Details</button>
            </div>
          </div>
         
            </div>
            <div className="row gap-3">
          <div className=" card col-3 my-5 border border-black ">
            <div className='my-3 ms-3'>
                <h5 className='fw-bold'>ProjectEuler+</h5>
                <p >Open Indefinitly</p>
            </div>
            <div>
                <button className='btn btn-light ms-3 my-3 fw-bold'>View Details</button>
            </div>
          </div>
          <div className=" card col-3 my-5 border border-black ">
            <div className='my-3 ms-3'>
                <h5 className='fw-bold'>ProjectEuler+</h5>
                <p >Open Indefinitly</p>
            </div>
            <div>
                <button className='btn btn-light ms-3 my-3 fw-bold'>View Details</button>
            </div>
          </div>
          <div className=" card col-3 my-5 border border-black ">
            <div className='my-3 ms-3'>
                <h5 className='fw-bold'>ProjectEuler+</h5>
                <p >Open Indefinitly</p>
            </div>
            <div>
                <button className='btn btn-light ms-3 my-3 fw-bold'>View Details</button>
            </div>
          </div>
         
            </div>
            <div className="row gap-3">
          <div className=" card col-3 my-5 border border-black ">
            <div className='my-3 ms-3'>
                <h5 className='fw-bold'>ProjectEuler+</h5>
                <p >Open Indefinitly</p>
            </div>
            <div>
                <button className='btn btn-light ms-3 my-3 fw-bold'>View Details</button>
            </div>
          </div>
          <div className=" card col-3 my-5 border border-black ">
            <div className='my-3 ms-3'>
                <h5 className='fw-bold'>ProjectEuler+</h5>
                <p >Open Indefinitly</p>
            </div>
            <div>
                <button className='btn btn-light ms-3 my-3 fw-bold'>View Details</button>
            </div>
          </div>
          <div className=" card col-3 my-5 border border-black ">
            <div className='my-3 ms-3'>
                <h5 className='fw-bold'>ProjectEuler+</h5>
                <p >Open Indefinitly</p>
            </div>
            <div>
                <button className='btn btn-light ms-3 my-3 fw-bold'>View Details</button>
            </div>
          </div>
         
            </div>
        </div>
        <div className="container">
            <h3>College Contests</h3>
            <div className="row gap-3">
          <div className=" card col-3 my-5 border border-black ">
            <div className='my-3 ms-3'>
                <h5 className='fw-bold'>ProjectEuler+</h5>
                <p >Open Indefinitly</p>
            </div>
            <div>
                <button className='btn btn-light ms-3 my-3 fw-bold'>View Details</button>
            </div>
          </div>
          <div className=" card col-3 my-5 border border-black ">
            <div className='my-3 ms-3'>
                <h5 className='fw-bold'>ProjectEuler+</h5>
                <p >Open Indefinitly</p>
            </div>
            <div>
                <button className='btn btn-light ms-3 my-3 fw-bold'>View Details</button>
            </div>
          </div>
          <div className=" card col-3 my-5 border border-black ">
            <div className='my-3 ms-3'>
                <h5 className='fw-bold'>ProjectEuler+</h5>
                <p >Open Indefinitly</p>
            </div>
            <div>
                <button className='btn btn-light ms-3 my-3 fw-bold'>View Details</button>
            </div>
          </div>
         
            </div>
            <div className="row gap-3">
          <div className=" card col-3 my-5 border border-black ">
            <div className='my-3 ms-3'>
                <h5 className='fw-bold'>ProjectEuler+</h5>
                <p >Open Indefinitly</p>
            </div>
            <div>
                <button className='btn btn-light ms-3 my-3 fw-bold'>View Details</button>
            </div>
          </div>
          <div className=" card col-3 my-5 border border-black ">
            <div className='my-3 ms-3'>
                <h5 className='fw-bold'>ProjectEuler+</h5>
                <p >Open Indefinitly</p>
            </div>
            <div>
                <button className='btn btn-light ms-3 my-3 fw-bold'>View Details</button>
            </div>
          </div>
          <div className=" card col-3 my-5 border border-black ">
            <div className='my-3 ms-3'>
                <h5 className='fw-bold'>ProjectEuler+</h5>
                <p >Open Indefinitly</p>
            </div>
            <div>
                <button className='btn btn-light ms-3 my-3 fw-bold'>View Details</button>
            </div>
          </div>
         
            </div>
            <div className="row gap-3">
          <div className=" card col-3 my-5 border border-black ">
            <div className='my-3 ms-3'>
                <h5 className='fw-bold'>ProjectEuler+</h5>
                <p >Open Indefinitly</p>
            </div>
            <div>
                <button className='btn btn-light ms-3 my-3 fw-bold'>View Details</button>
            </div>
          </div>
          <div className=" card col-3 my-5 border border-black ">
            <div className='my-3 ms-3'>
                <h5 className='fw-bold'>ProjectEuler+</h5>
                <p >Open Indefinitly</p>
            </div>
            <div>
                <button className='btn btn-light ms-3 my-3 fw-bold'>View Details</button>
            </div>
          </div>
          <div className=" card col-3 my-5 border border-black ">
            <div className='my-3 ms-3'>
                <h5 className='fw-bold'>ProjectEuler+</h5>
                <p >Open Indefinitly</p>
            </div>
            <div>
                <button className='btn btn-light ms-3 my-3 fw-bold'>View Details</button>
            </div>
          </div>
         
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

export default Compete