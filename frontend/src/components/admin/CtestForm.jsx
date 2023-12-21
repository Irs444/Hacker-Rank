import React from 'react'
import { useNavigate } from 'react-router-dom';

const CtestForm = () => {

    const navigate = useNavigate();

    const allow = () => {
        navigate('/test');
    }

  return (
    <div>
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
        <div className="card ">
            <div className="card-header">
                <div className="row my-5">
                    <div className="col-2 p-0 ms-4">
                        <img src="https://www.itview.in/img/features/certificate.png" alt="" height={100} />
                    </div>
                    <div className="col-8">
                        <p className='fs-1'>Angular (Basic) Skills Certification Test</p>
                        <div>
                            <span><img src="https://cdn-icons-png.flaticon.com/512/109/109613.png" alt="" height={20} /> 60 min</span>
                            <button className='rounded ms-2'><span>AngularJS</span></button>
                            <button className='rounded ms-2'><span>JavaScript</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className='d-flex justify-content-start my-5'>                
                    <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Eo_circle_blue_number-1.svg/2048px-Eo_circle_blue_number-1.svg.png" alt="" height={30} className='ms-2' />
                    <span className='fw-bold text-primary ms-2'>Review Profile </span>
                </div>
                <div>
                    <img src="https://www.solutionblades.com/wp-content/uploads/2022/12/blue-arrow-Snapchat-icon-300x169.png" alt="" height={30} />
                </div>
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Eo_circle_light-blue_white_number-2.svg/1024px-Eo_circle_light-blue_white_number-2.svg.png" alt="" height={30} className='ms-2' />
                    <span className='fw-bold text-primary ms-2'>Certification Test </span>
                </div>
                </div>
                 
                 <fieldset>
                 <p className='fw-bold'>PERSONAL</p>
                <form action="">
               <div className="row">
                <div className="col-6">
                    <label htmlFor="name" className='form-label'>First Name</label>
                    <input type="text" id='name' className='form-control' />
                </div>
                <div className="col-6">
                <label htmlFor="name" className='form-label'>Last Name</label>
                    <input type="text" id='name' className='form-control' />
                </div>
               </div>
               <div className='mb-4'>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJtNKoZi-Zr9qOTVWsBBFSo-DtIIh_SvIOUw&usqp=CAU" alt="" height={10} />
               <span>The above mentioned name will be displayed on your certificate and cannot be changed later.</span>
               </div>
               <div className='row'>
                <div className="col-6">
                <label htmlFor="floatingSelect" >Country of Residence</label>
             
                <select name="" id="floatingSelect" className='form-select mb-4' >
                    <option value="">India</option>
                    <option value="">India</option>
                    <option value="">India</option>
                    <option value="">India</option>
                </select>
             
              
                </div>
               </div>
               <div className="row">
                <div className="col-6">
                    <label htmlFor="nummber">Phone Number</label>
                    <div className="row">
                        <div className="col-2">
                           
                                <select name="" id="number" className='form-select mb-4'>
                                    <option value="">+91</option>
                                </select>
                          
                        </div>
                        <div className="col-10">
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                </div>
               </div>
                </form>
                </fieldset>
                <fieldset>
                   <p className='fw-bold'>PROFESSIONAL</p>
                   <form action="">
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="student" className='form-label'>I am currently a</label>
                          
                            <select name="" id="student" className='form-select mb-4'>
                                <option value="">Professional</option>
                                <option value="">Student</option>
                                
                            </select>
                        
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="school" className='mb-1'>School</label>
                           
                                <select name="" id="school" className='form-select mb-4'>
                                    <option value="">Select School</option>
                                    <option value="">Select School</option>
                                    <option value="">Select School</option>
                                    <option value="">Select School</option>
                                </select>
                          
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="year" className='mb-1'>Expected year of Graduation </label>
                           
                                <select name="" id="year" className='form-select mb-4 ' aria-label="Small select example">
                                    <option value="">2021</option>
                                    <option value="">2022</option>
                                    <option value="">2023</option>
                                    <option value="">2024</option>
                                </select>
                           
                        </div>
                        <div className="col-6">
                        <label htmlFor="year" className='mb-1'>Expected month of Graduation </label>
                           
                                <select name="" id="year" className='form-select mb-4'>
                                    <option value="">January</option>
                                    <option value="">Febuary</option>
                                    <option value="">March</option>
                                    <option value="">April</option>
                                </select>
                         
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="degree" className='form-label'>Degree</label>
                            <select name="" id="degree" className='form-select mb-4'>
                                <option value="">B.tech</option>
                                <option value="">BBA</option>
                                <option value="">MBA</option>
                                <option value="">M.tech</option>
                            </select>
                        </div>
                        <div className="col-6">
                        <label htmlFor="program" className='form-label'>Program</label>
                            <select name="" id="pprogram" className='form-select mb-4'>
                                <option value="">Computer Science</option>
                                <option value="">Computer Networking</option>
                                <option value="">Data Science</option>
                                <option value="">Electrical Engineering</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="link" className='form-label'>Linkedin / Resume</label>
                            <input type="text" className='form-control mb-4' placeholder='Enetr the linkedin url' />
                        </div>
                        <div className="col-6 my-4">
                            <a href="" >Uploade File</a>
                            <span>(Accepted file formats:PDF,DOCX,TXT)</span>
                        </div>
                    </div>


                   </form>
                </fieldset>
                <fieldset>
                  <p className='fw-bold'>WORK AUTHORIZATION</p>
                  <form action="">
                    <label htmlFor="authorize" className='form-label'>Are you legally authorized to work in the United State</label>
                    
                    <div className='d-flex justify-content-start'>
                    <div className="form-check">
                   <input type="radio" className='form-check-input' id='authorize' />
                   <label htmlFor="authorize" className='form-check-label'>Yes</label>
                   </div>

                   <div className="form-check ms-3">
                   <input type="radio" className='form-check-input' id='authorize' />
                   <label htmlFor="authorize" className='form-check-label'>No</label>
                   </div>

                   </div>
                   <div className='my-3'>
                    <button className='btn btn-success fw-bold' onClick={allow}>Proceed</button>
                   </div>
                  </form>
                </fieldset>

            </div>
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

export default CtestForm