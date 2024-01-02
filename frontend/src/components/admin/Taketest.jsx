import React from 'react'
import Navbar1 from './Navbar1'

const Taketest = () => {
  return (
    <div>
        <Navbar1/>
          <div className="container my-3">

<div >
    <span>Dashboard &gt; Certification Test &gt; Angular(Basic)</span>
    
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
                  
                  
                   <p>Make sure you’re in a quiet environment with a stable internet connection and limited distractions. Good luck!</p>
                    <div className="container p-5 ">
                        <div className="card w-50" style={{height:"18rem"}}>
                        <div className='d-flex justify-content-center my-5'>
                            <h4>Angular (Basic) Skills Certification Test</h4>
                           
                        </div>
                        <div className='d-flex justify-content-center'>
                        <img src="https://cdn-icons-png.flaticon.com/512/2916/2916315.png" alt="" height={100}  />
                        </div>
                        </div>
                    </div>
                   
                   <div className='my-3'>
                    <button className='btn btn-success fw-bold'>Proceed</button>
                   </div>
                 
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

export default Taketest