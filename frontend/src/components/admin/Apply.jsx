import React from 'react'
import Navbar1 from './Navbar1'
import { useNavigate } from 'react-router-dom';

const Apply = () => {
    const navigate = useNavigate();
    const back = () => {
        navigate('/dashboard');
    }
    
  return (
    <div >
        <Navbar1/>
        <div className="container my-3">
            <div className="row">
                <div className="col-6  ">
                    <div>
                    <button className='btn rounded-5 text-primary' onClick={back}>&larr;Go Back</button>
                    </div>
                    <div className='my-3'>
                        <img src="https://tse2.mm.bing.net/th?id=OIP.NhhuMSxWQBsx2h1SeoIhNAHaCu&pid=Api&P=0&h=180" alt="" height={30} />
                    </div>
                    <div>
                        <h1 className='fw-bold' >Staff-Engineer - Backend</h1>
                    </div>
                    <div className='d-flex justify-content-start '>
                        <img src="https://tse4.mm.bing.net/th?id=OIP.fq2cDZNQfzF2NhYl6I8xEgHaHa&pid=Api&P=0&h=180" alt="" height={20} />
                        <p className='ms-2'>ThoughSpot</p>
                    </div>
                    <div  className='d-flex justify-content-start '>
                        <img src="https://static.vecteezy.com/system/resources/previews/012/879/250/original/job-description-icon-style-vector.jpg" alt="" height={20}/>
                        <p className='ms-2'>Java. Problem solving. Python </p>
                    </div>
                    <div  className='d-flex justify-content-start ' >
                        <img src="https://vectorified.com/images/location-icon-15.png" alt="" height={20} />
                        <p className="ms-2">India</p>
                    </div>
                    <div>
                        <button className='btn text-white fw-bold' style={{backgroundColor:"green"}}>Apply</button>
                        <button className=' btn ms-3 fw-semibold' style={{backgroundColor:"whitesmoke"}}>Wishlist <span className='ms-2'><img src="http://www.clipartbest.com/cliparts/KTn/XnM/KTnXnMAgc.png" alt="" height={20} /></span></button>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card p-4 w-100" style={{backgroundColor:"whitesmoke"}}>
                        <div>
                           <span>Come join a team of world-class engineers building ThoughtSpot’s relational search engine.</span>
                           <span>We are looking for engineers with a proven track record of being industry visionaries to join</span>
                           <span>the team responsible for building ThoughtSpot’s natural language relational search engine, personalized data exploration engine, universal object search engine, AI powered ranking and relevance engine, distributed in-memory search indexing infrastructure and much more.</span>
                       
                        </div>
                        <div className='mt-2'>
                            <strong>Responsibilities</strong>
                            <ul>
                                <li>Design and implement scalable backend systems that process and manage large volumes of customer data</li>
                                <li>Analyze and improve the efficiency, scalability, and reliability of our backend systems.</li>
                                <li>Write robust code and write functional, performance, and system test suites</li>
                                <li>Work as a member of a team, helping the team respond quickly and effectively to business needs</li>
                            </ul>
                        </div>
                        <div className='mt-2'>
                            <strong>Requires Skills/Qualification</strong>
                            <ul>
                                <li>Strong coding skills with 8+ years of experience in modern languages such as C++/GO/Java/Python</li>
                                <li>Have the ability to write clean, effective code is a must and drill deep on technical implementation.</li>
                                <li>Have experience working with cross-functional teams in a dynamic environment.</li>
                                <li>Good understanding of distributed systems, scalability, and availability</li>
                                <li>Strong problem-solving skills, algorithmic thinking, and a strong foundation in how systems work.</li>
                                <li>Experience in designing and developing scale-out, high-performance data platforms is a plus</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-5'>
        <hr />

        </div>
        <div className="container">
            <div className='my-5'>
                <strong>Similar Job</strong>
            </div>
            <div className='container'>
              <div className="row">
                <div className="col-3">
                <div className="card">
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
                <div className="card">
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
                <div className="card">
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
                <div className="card">
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
        <div className="container my-5">
           
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

export default Apply