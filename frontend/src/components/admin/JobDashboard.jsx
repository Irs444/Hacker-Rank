import React from 'react'
import Navbar1 from './Navbar1'
import { useNavigate } from 'react-router-dom';

const JobDashboard = () => {

    const navigate = useNavigate();

    const apply = () => {
        navigate('/apply')
    }
  return (
    <div>
        <Navbar1/>
        <div className="container my-3">
            <p className='m-0'>Apply</p>
            <h2>Get Your Dream Job</h2>
        </div>
        <hr />
        <div className="container bg-light">
            <div className="row my-5">
                <div className="col-3  ">
                    <div className="card py-4" onClick={apply}>
                        <div className="card-body">
                            <span className='fw-bold my-3'>Handpicked Remote Jobs</span>
                            <p>Work from anywhere</p>
                            <div>
                                <button className='rounded-5 btn btn-light'>&rarr;</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                <div className="card py-4" onClick={apply}>
                        <div className="card-body">
                            <span className='fw-bold my-3'>Internship Spotlight</span>
                            <p>start your journey</p>
                            <div>
                                <button className='rounded-5 btn btn-light'>&rarr;</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                <div className="card py-4 bg-dark text-white" onClick={apply}>
                        <div className="card-body">
                            <span className='fw-bold my-3'>Handpicked Remote Jobs</span>
                            <p>Work from anywhere</p>
                            <div>
                                <button className='rounded-5 btn btn-light'>&rarr;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container d-flex justify-content-start">
            <div>
            
      <button className="nav-link dropdown-toggle btn btn-light p-3" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Role</button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#scrollspyHeading3">Backend Developer</a></li>
        <li><a className="dropdown-item" href="#scrollspyHeading4">Bcakend Developer(C)</a></li>
        <li><a className="dropdown-item" href="#scrollspyHeading4">Bcakend Developer(C++)</a></li>
        <li><a className="dropdown-item" href="#scrollspyHeading4">Bcakend Developer(Java)</a></li>
        <li><a className="dropdown-item" href="#scrollspyHeading5">Data Analyst</a></li>
      </ul>
     
            </div>
            <div className='ms-2'>
            <button className="nav-link dropdown-toggle btn btn-light p-3" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Experience</button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#scrollspyHeading3">0-3 Year</a></li>
        <li><a className="dropdown-item" href="#scrollspyHeading4">3-5  Year</a></li>
        <li><a className="dropdown-item" href="#scrollspyHeading4">5-7 Year</a></li>
        <li><a className="dropdown-item" href="#scrollspyHeading5">7+ Year</a></li>
      </ul>
     
            </div>
            <div className='ms-2'>
            <button className="nav-link dropdown-toggle btn btn-light p-3" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Location</button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#scrollspyHeading3">India</a></li>
        <li><a className="dropdown-item" href="#scrollspyHeading4">America</a></li>
        <li><a className="dropdown-item" href="#scrollspyHeading4">Africa</a></li>
       
        <li><a className="dropdown-item" href="#scrollspyHeading5">Indonesia</a></li>
      </ul>
     
            </div>
            <div className='ms-2'>
            <button className="nav-link dropdown-toggle btn btn-light p-3" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Company</button>
     
     
       {/* <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#scrollspyHeading3">Third</a></li>
        <li><a className="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
        <li> <hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
      </ul>  */}
     
     
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <div className="card" onClick={apply}>
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between">
                                <div className='d-flex justify-content-start'>
                                    <img src="https://tse2.mm.bing.net/th?id=OIP.NhhuMSxWQBsx2h1SeoIhNAHaCu&pid=Api&P=0&h=180" alt="" height={20} />
                                    <p className='fw-bold'>ThoughSpot</p>
                                   
                                </div>
                               
                                <div>
                                    <img src="https://cdn.onlinewebfonts.com/svg/img_573021.png" alt="" height={20} />
                                </div>
                            </div>
                            <div>
                                <p className='fw-bold'>Staff-Engineer- Backend</p>
                                </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p>Java.Problem Solving.Python</p>
                                </div>
                               
                            </div>
                            <div>
                                <button className='btn btn-light rounded-5'>India</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card" onClick={apply}>
                    <div className="card-body p-4">
                            <div className="d-flex justify-content-between">
                                <div className='d-flex justify-content-start'>
                                    <img src="https://tse2.mm.bing.net/th?id=OIP.NhhuMSxWQBsx2h1SeoIhNAHaCu&pid=Api&P=0&h=180" alt="" height={20} />
                                    <p className='fw-bold'>ThoughSpot</p>
                                   
                                </div>
                               
                                <div>
                                    <img src="https://cdn.onlinewebfonts.com/svg/img_573021.png" alt="" height={20} />
                                </div>
                            </div>
                            <div>
                                <p className='fw-bold'>Staff-Engineer- Backend</p>
                                </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p>Java.Problem Solving.Python</p>
                                </div>
                               
                            </div>
                            <div>
                                <button className='btn btn-light rounded-5'>India</button>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="col-3">
                    <div className="card" onClick={apply}>
                    <div className="card-body p-4">
                            <div className="d-flex justify-content-between">
                                <div className='d-flex justify-content-start'>
                                    <img src="https://tse2.mm.bing.net/th?id=OIP.NhhuMSxWQBsx2h1SeoIhNAHaCu&pid=Api&P=0&h=180" alt="" height={20} />
                                    <p className='fw-bold'>ThoughSpot</p>
                                   
                                </div>
                               
                                <div>
                                    <img src="https://cdn.onlinewebfonts.com/svg/img_573021.png" alt="" height={20} />
                                </div>
                            </div>
                            <div>
                                <p className='fw-bold'>Staff-Engineer- Backend</p>
                                </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p>Java.Problem Solving.Python</p>
                                </div>
                               
                            </div>
                            <div>
                                <button className='btn btn-light rounded-5'>India</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card" onClick={apply}>
                    <div className="card-body p-4">
                            <div className="d-flex justify-content-between">
                                <div className='d-flex justify-content-start'>
                                    <img src="https://tse2.mm.bing.net/th?id=OIP.NhhuMSxWQBsx2h1SeoIhNAHaCu&pid=Api&P=0&h=180" alt="" height={20} />
                                    <p className='fw-bold'>ThoughSpot</p>
                                   
                                </div>
                               
                                <div>
                                    <img src="https://cdn.onlinewebfonts.com/svg/img_573021.png" alt="" height={20} />
                                </div>
                            </div>
                            <div>
                                <p className='fw-bold'>Staff-Engineer- Backend</p>
                                </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p>Java.Problem Solving.Python</p>
                                </div>
                               
                            </div>
                            <div>
                                <button className='btn btn-light rounded-5'>India</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="container">
        <div className="row my-3">
                <div className="col-3">
                    <div className="card" onClick={apply}>
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between">
                                <div className='d-flex justify-content-start'>
                                    <img src="https://tse2.mm.bing.net/th?id=OIP.NhhuMSxWQBsx2h1SeoIhNAHaCu&pid=Api&P=0&h=180" alt="" height={20} />
                                    <p className='fw-bold'>ThoughSpot</p>
                                   
                                </div>
                               
                                <div>
                                    <img src="https://cdn.onlinewebfonts.com/svg/img_573021.png" alt="" height={20} />
                                </div>
                            </div>
                            <div>
                                <p className='fw-bold'>Staff-Engineer- Backend</p>
                                </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p>Java.Problem Solving.Python</p>
                                </div>
                               
                            </div>
                            <div>
                                <button className='btn btn-light rounded-5'>India</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card" onClick={apply}>
                    <div className="card-body p-4">
                            <div className="d-flex justify-content-between">
                                <div className='d-flex justify-content-start'>
                                    <img src="https://tse2.mm.bing.net/th?id=OIP.NhhuMSxWQBsx2h1SeoIhNAHaCu&pid=Api&P=0&h=180" alt="" height={20} />
                                    <p className='fw-bold'>ThoughSpot</p>
                                   
                                </div>
                               
                                <div>
                                    <img src="https://cdn.onlinewebfonts.com/svg/img_573021.png" alt="" height={20} />
                                </div>
                            </div>
                            <div>
                                <p className='fw-bold'>Staff-Engineer- Backend</p>
                                </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p>Java.Problem Solving.Python</p>
                                </div>
                               
                            </div>
                            <div>
                                <button className='btn btn-light rounded-5'>India</button>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="col-3">
                    <div className="card" onClick={apply}>
                    <div className="card-body p-4">
                            <div className="d-flex justify-content-between">
                                <div className='d-flex justify-content-start'>
                                    <img src="https://tse2.mm.bing.net/th?id=OIP.NhhuMSxWQBsx2h1SeoIhNAHaCu&pid=Api&P=0&h=180" alt="" height={20} />
                                    <p className='fw-bold'>ThoughSpot</p>
                                   
                                </div>
                               
                                <div>
                                    <img src="https://cdn.onlinewebfonts.com/svg/img_573021.png" alt="" height={20} />
                                </div>
                            </div>
                            <div>
                                <p className='fw-bold'>Staff-Engineer- Backend</p>
                                </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p>Java.Problem Solving.Python</p>
                                </div>
                               
                            </div>
                            <div>
                                <button className='btn btn-light rounded-5'>India</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card" onClick={apply}>
                    <div className="card-body p-4">
                            <div className="d-flex justify-content-between">
                                <div className='d-flex justify-content-start'>
                                    <img src="https://tse2.mm.bing.net/th?id=OIP.NhhuMSxWQBsx2h1SeoIhNAHaCu&pid=Api&P=0&h=180" alt="" height={20} />
                                    <p className='fw-bold'>ThoughSpot</p>
                                   
                                </div>
                               
                                <div>
                                    <img src="https://cdn.onlinewebfonts.com/svg/img_573021.png" alt="" height={20} />
                                </div>
                            </div>
                            <div>
                                <p className='fw-bold'>Staff-Engineer- Backend</p>
                                </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p>Java.Problem Solving.Python</p>
                                </div>
                               
                            </div>
                            <div>
                                <button className='btn btn-light rounded-5'>India</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
        <div className="row my-3">
                <div className="col-3">
                    <div className="card" onClick={apply}>
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between">
                                <div className='d-flex justify-content-start'>
                                    <img src="https://tse2.mm.bing.net/th?id=OIP.NhhuMSxWQBsx2h1SeoIhNAHaCu&pid=Api&P=0&h=180" alt="" height={20} />
                                    <p className='fw-bold'>ThoughSpot</p>
                                   
                                </div>
                               
                                <div>
                                    <img src="https://cdn.onlinewebfonts.com/svg/img_573021.png" alt="" height={20} />
                                </div>
                            </div>
                            <div>
                                <p className='fw-bold'>Staff-Engineer- Backend</p>
                                </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p>Java.Problem Solving.Python</p>
                                </div>
                               
                            </div>
                            <div>
                                <button className='btn btn-light rounded-5'>India</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card" onClick={apply}>
                    <div className="card-body p-4">
                            <div className="d-flex justify-content-between">
                                <div className='d-flex justify-content-start'>
                                    <img src="https://tse2.mm.bing.net/th?id=OIP.NhhuMSxWQBsx2h1SeoIhNAHaCu&pid=Api&P=0&h=180" alt="" height={20} />
                                    <p className='fw-bold'>ThoughSpot</p>
                                   
                                </div>
                               
                                <div>
                                    <img src="https://cdn.onlinewebfonts.com/svg/img_573021.png" alt="" height={20} />
                                </div>
                            </div>
                            <div>
                                <p className='fw-bold'>Staff-Engineer- Backend</p>
                                </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p>Java.Problem Solving.Python</p>
                                </div>
                               
                            </div>
                            <div>
                                <button className='btn btn-light rounded-5'>India</button>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="col-3">
                    <div className="card" onClick={apply}>
                    <div className="card-body p-4" >
                            <div className="d-flex justify-content-between">
                                <div className='d-flex justify-content-start'>
                                    <img src="https://tse2.mm.bing.net/th?id=OIP.NhhuMSxWQBsx2h1SeoIhNAHaCu&pid=Api&P=0&h=180" alt="" height={20} />
                                    <p className='fw-bold'>ThoughSpot</p>
                                   
                                </div>
                               
                                <div>
                                    <img src="https://cdn.onlinewebfonts.com/svg/img_573021.png" alt="" height={20} />
                                </div>
                            </div>
                            <div>
                                <p className='fw-bold'>Staff-Engineer- Backend</p>
                                </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p>Java.Problem Solving.Python</p>
                                </div>
                               
                            </div>
                            <div>
                                <button className='btn btn-light rounded-5'>India</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card" onClick={apply}>
                    <div className="card-body p-4">
                            <div className="d-flex justify-content-between">
                                <div className='d-flex justify-content-start'>
                                    <img src="https://tse2.mm.bing.net/th?id=OIP.NhhuMSxWQBsx2h1SeoIhNAHaCu&pid=Api&P=0&h=180" alt="" height={20} />
                                    <p className='fw-bold'>ThoughSpot</p>
                                   
                                </div>
                               
                                <div>
                                    <img src="https://cdn.onlinewebfonts.com/svg/img_573021.png" alt="" height={20} />
                                </div>
                            </div>
                            <div>
                                <p className='fw-bold'>Staff-Engineer- Backend</p>
                                </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p>Java.Problem Solving.Python</p>
                                </div>
                               
                            </div>
                            <div>
                                <button className='btn btn-light rounded-5'>India</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
        <div className="row my-3">
                <div className="col-3">
                    <div className="card" onClick={apply}>
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between">
                                <div className='d-flex justify-content-start'>
                                    <img src="https://tse2.mm.bing.net/th?id=OIP.NhhuMSxWQBsx2h1SeoIhNAHaCu&pid=Api&P=0&h=180" alt="" height={20} />
                                    <p className='fw-bold'>ThoughSpot</p>
                                   
                                </div>
                               
                                <div>
                                    <img src="https://cdn.onlinewebfonts.com/svg/img_573021.png" alt="" height={20} />
                                </div>
                            </div>
                            <div>
                                <p className='fw-bold'>Staff-Engineer- Backend</p>
                                </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p>Java.Problem Solving.Python</p>
                                </div>
                               
                            </div>
                            <div>
                                <button className='btn btn-light rounded-5'>India</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card" onClick={apply}>
                    <div className="card-body p-4">
                            <div className="d-flex justify-content-between">
                                <div className='d-flex justify-content-start'>
                                    <img src="https://tse2.mm.bing.net/th?id=OIP.NhhuMSxWQBsx2h1SeoIhNAHaCu&pid=Api&P=0&h=180" alt="" height={20} />
                                    <p className='fw-bold'>ThoughSpot</p>
                                   
                                </div>
                               
                                <div>
                                    <img src="https://cdn.onlinewebfonts.com/svg/img_573021.png" alt="" height={20} />
                                </div>
                            </div>
                            <div>
                                <p className='fw-bold'>Staff-Engineer- Backend</p>
                                </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p>Java.Problem Solving.Python</p>
                                </div>
                               
                            </div>
                            <div>
                                <button className='btn btn-light rounded-5'>India</button>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="col-3">
                    <div className="card" onClick={apply}>
                    <div className="card-body p-4">
                            <div className="d-flex justify-content-between">
                                <div className='d-flex justify-content-start'>
                                    <img src="https://tse2.mm.bing.net/th?id=OIP.NhhuMSxWQBsx2h1SeoIhNAHaCu&pid=Api&P=0&h=180" alt="" height={20} />
                                    <p className='fw-bold'>ThoughSpot</p>
                                   
                                </div>
                               
                                <div>
                                    <img src="https://cdn.onlinewebfonts.com/svg/img_573021.png" alt="" height={20} />
                                </div>
                            </div>
                            <div>
                                <p className='fw-bold'>Staff-Engineer- Backend</p>
                                </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p>Java.Problem Solving.Python</p>
                                </div>
                               
                            </div>
                            <div>
                                <button className='btn btn-light rounded-5'>India</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card" onClick={apply}>
                    <div className="card-body p-4">
                            <div className="d-flex justify-content-between">
                                <div className='d-flex justify-content-start'>
                                    <img src="https://tse2.mm.bing.net/th?id=OIP.NhhuMSxWQBsx2h1SeoIhNAHaCu&pid=Api&P=0&h=180" alt="" height={20} />
                                    <p className='fw-bold'>ThoughSpot</p>
                                   
                                </div>
                               
                                <div>
                                    <img src="https://cdn.onlinewebfonts.com/svg/img_573021.png" alt="" height={20} />
                                </div>
                            </div>
                            <div>
                                <p className='fw-bold'>Staff-Engineer- Backend</p>
                                </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p>Java.Problem Solving.Python</p>
                                </div>
                               
                            </div>
                            <div>
                                <button className='btn btn-light rounded-5'>India</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default JobDashboard