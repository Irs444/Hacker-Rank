import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar1 from './Navbar1';

const Certificate = () => {

    const navigate = useNavigate();
    const nextpage = () => {
        navigate('/ctest');
    }
  return (
    <div>
        <Navbar1/>
        <div className="container   ">
            <div className="header my-3">
                <span>Dasboard</span>
                <h3 className='fw-bold'>Get Certified</h3>
            </div>
            </div>
            <div className=" container  bg-primary text-white ">
                <div className="row m-4 ">
                    <div className="col-4  ">
                        <div className="header m-5">
                            <h3>Stand out from the crowd</h3>
                            <p>Get certified in technical skills by taking the HackerRank Certification Test</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="header m-5">
                            <h3>Standardised Assessment</h3>
                            <span>Assessments are organised around specific skills and are carefully curated based on years of recruiting data from 2000+ companies</span>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="header m-5">
                            <h3>Enrich your profile</h3>
                            <span>Upon successfully clearing an assessment, you can promote yourself using the HackerRank certificate to peers and employers</span>
                        </div>
                    </div>
                </div>
            </div>
          

        
        <div className="container">
            <div className="header">
                <h4 className='fw-bold'>Get Your Role Certified</h4>
            </div>
            <div className="row">
                <div className="col-4 ">
                    <div className="card m-4 px-3 h-75 ">
                        <div className="card-body">
                            <h2>Frontend Developer<br/>(React)</h2>
                            <Link href="" to="/ctest">View Status</Link>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                <div className="card m-4 px-3  h-75">
                        <div className="card-body">
                            <h2 >Software Engineer</h2>
                           <button className='btn btn-light fw-medium ' onClick={nextpage}>Get Certified</button>
                        </div> 
                    </div>
                </div>
                <div className="col-4">
                <div className="card m-4 px-3 h-75">
                        <div className="card-body  ">
                            <h2>Software Engineer<br/>(Intern)</h2>
                            <button className='btn btn-light fw-medium' onClick={nextpage}>Get Certified</button>
                        </div>
                    </div>
                </div>
            </div>
           </div>
           <div className="container">
            <div className="header">
                <h4 className='fw-bold'>Get Your Skills Certified</h4>
            </div>
            <div className="row">
                <div className="col-4">
                <div className="card m-4 px-3  h-75">
                        <div className="card-body">
                            <h2 >Software Engineer</h2>
                           <button className='btn btn-light fw-medium ' onClick={nextpage}>Get Certified</button>
                        </div> 
                    </div>
                </div>
                <div className="col-4">
                <div className="card m-4 px-3  h-75">
                        <div className="card-body">
                            <h2 >Software Engineer</h2>
                           <button className='btn btn-light fw-medium ' onClick={nextpage}>Get Certified</button>
                        </div> 
                    </div>
                </div>
                <div className="col-4">
                <div className="card m-4 px-3  h-75">
                        <div className="card-body">
                            <h2 >Software Engineer</h2>
                           <button className='btn btn-light fw-medium ' onClick={nextpage}>Get Certified</button>
                        </div> 
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                <div className="card m-4 px-3  h-75">
                        <div className="card-body">
                            <h2 >Software Engineer</h2>
                           <button className='btn btn-light fw-medium ' onClick={nextpage}>Get Certified</button>
                        </div> 
                    </div>
                </div>
                <div className="col-4">
                <div className="card m-4 px-3  h-75">
                        <div className="card-body">
                            <h2 >Software Engineer</h2>
                           <button className='btn btn-light fw-medium ' onClick={nextpage}>Get Certified</button>
                        </div> 
                    </div>
                </div>
                <div className="col-4">
                <div className="card m-4 px-3  h-75">
                        <div className="card-body">
                            <h2 >Software Engineer</h2>
                           <button className='btn btn-light fw-medium ' onClick={nextpage}>Get Certified</button>
                        </div> 
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                <div className="card m-4 px-3  h-75">
                        <div className="card-body">
                            <h2 >Software Engineer</h2>
                           <button className='btn btn-light fw-medium ' onClick={nextpage}>Get Certified</button>
                        </div> 
                    </div>
                </div>
                <div className="col-4">
                <div className="card m-4 px-3  h-75">
                        <div className="card-body">
                            <h2 >Software Engineer</h2>
                           <button className='btn btn-light fw-medium ' onClick={nextpage}>Get Certified</button>
                        </div> 
                    </div>
                </div>
                <div className="col-4">
                <div className="card m-4 px-3  h-75">
                        <div className="card-body">
                            <h2 >Software Engineer</h2>
                           <button className='btn btn-light fw-medium ' onClick={nextpage}>Get Certified</button>
                        </div> 
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

export default Certificate