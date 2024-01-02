import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Navbar1 from './Navbar1';

const Ctest = () => {
  const  navigate = useNavigate();
     const hackertest = () => {
        navigate('/ctestform')
     }
  return (
    <div>
        <Navbar1/>
        <div className="container my-3">

            <div >
                <span>Dashboard &gt; Certification Test</span>
                
            </div>
            <div>
            <span className='fw-bold fs-3'>Angular (Basic) Skills Certification Test</span>
            </div>


        </div>
        <hr />
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-6">
                    <div className='my-5' >
                    <p className='fs-2 my-1'>Verify Your Angular Skill.</p>
                    <p className='fs-2 '>Accelerate Your Job Search.</p>
                    </div>
                    <div className='my-4'>
                        <span>Take the HackerRank Certification Test and Showcase Yoour Knowledge <br/> as a hackerRank Verified Certification</span>
                       
                    </div>
                    <div className='my-4 '>
                        <button className='btn btn-success fw-bold' onClick={hackertest}>TaketheHackerrRankSkillTest</button>
                    </div>
                </div>
                <div className="col-6 my-5">
                    <img src="https://png.pngtree.com/png-vector/20231018/ourmid/pngtree-academic-certificate-logo-vector-png-image_10305306.png" alt="" />
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-6 d-flex justify-content-start">
                    <p className='fs-2' style={{paddingTop:"150px"}}>Skills Over Pedigree</p>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-4">
                            <img src="https://img.freepik.com/premium-vector/blue-solid-hexagon-icon-blue-hexagon-shape_302321-1551.jpg" alt="" height={150} />
                        </div>
                        <div className="col-8 px-0 mt-4">
                            <h3 className='fw-bold'>Prove your Skills</h3>
                            <p>The HackerRank Skills Certification Test is a standardized<br/>assessment to help developers prove their coding skills.</p>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-4">
                        <img src="https://img.freepik.com/premium-vector/blue-solid-hexagon-icon-blue-hexagon-shape_302321-1551.jpg" alt="" height={150} />  
                        </div>
                        <div className="col-8 px-0 mt-4">
                            <h3 className='fw-bold'>Get noticed by companies</h3>
                            <p>Candidates who successfully clear the test will be specially<br/>highlighted to companies when they apply to relevant roles.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container text-center">
            <div className='mt-5'>
                <h1 className='d-flex justify-content-center'>How does it Works?</h1>
            </div>
            <div className="row">
                <div className="col-3">
                <img src="https://img.freepik.com/premium-vector/blue-solid-hexagon-icon-blue-hexagon-shape_302321-1551.jpg" alt="" height={150} /> 
                <h4>Update Profile</h4>
                </div>
                <div className="col-3">
                <img src="https://img.freepik.com/premium-vector/blue-solid-hexagon-icon-blue-hexagon-shape_302321-1551.jpg" alt="" height={150} />
                <h4>Take the Test</h4>
                </div>
                <div className="col-3">
                <img src="https://img.freepik.com/premium-vector/blue-solid-hexagon-icon-blue-hexagon-shape_302321-1551.jpg" alt="" height={150} />
                <h4>Apply for Jobs</h4>
                </div>
                <div className="col-3">
                <img src="https://img.freepik.com/premium-vector/blue-solid-hexagon-icon-blue-hexagon-shape_302321-1551.jpg" alt="" height={150} />
                <h4>Get highlighted to<br/> company</h4>
                </div>
            </div>
            <div className='mt-4'>
                <button className='btn btn-success'onClick={hackertest}>Proceed</button>
            </div>
        </div>
        <div className="container bg-primary-subtle ">
            <div >
            <h1 className='d-flex justify-content-center my-5'>No Worries. Zero risk.</h1>
            <p className='d-flex justify-content-center fs-5 mb-0'>If you fail to clear the test, no harm done. Your scores will remain private and will not be shared with any company.</p>
            <p className='d-flex justify-content-center fs-5'>You will be allowed to retake the test (if available) after a stipulated number of days.</p>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-6 d-flex justify-content-start">
                    <p className='fs-1' style={{paddingTop:"150px"}}>What can I expect<br/> during the test?</p>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-4">
                            <img src="https://img.freepik.com/premium-vector/blue-solid-hexagon-icon-blue-hexagon-shape_302321-1551.jpg" alt="" height={150} />
                        </div>
                        <div className="col-8 px-0 mt-4">
                            <h3 className='fw-bold'>1 hr Time Test</h3>
                           <p>The test will be for the duration of 1 hr.</p>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-4">
                        <img src="https://img.freepik.com/premium-vector/blue-solid-hexagon-icon-blue-hexagon-shape_302321-1551.jpg" alt="" height={150} />  
                        </div>
                        <div className="col-8 px-0 mt-4">
                            <h3 className='fw-bold'>Angular Concept</h3>
                            <p>It covers topics like MVC Frameworks, Components (Angular, Dynamic, Styling), TypeScript, Two Way Binding and Form Validation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <p className='d-flex justify-content-center my-5'>Do you have more questions? Check out our <span className='text-primary'>FAQ </span></p>
        </div>
        <div className="container text-center">
            <div>
            <button className='btn btn-success fw-bold' onClick={hackertest}>Take the Hacker Rank Skills Test</button>
            </div>
        </div>
        <div className="container">
           
           <div className="links d-flex justify-content-center my-5">
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

export default Ctest