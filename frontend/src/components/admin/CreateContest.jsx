import React from 'react'
import Navbar1 from './Navbar1'

const CreateContest = () => {
    return (
        <div>
            <Navbar1/>
            <div className="container my-5">
                <div>
                    <span className='fw-bold'>Manage Contest &gt; Create Contest</span>
                </div>
            </div>
            <hr />
            <div className="container">
                <div>
                    <p className='fs-2'>Create Contests</p>
                </div>
                <div>
                    <p>Host your own coding contest on HackerRank. You can practice and compete with friends from<br /> your organization or school. Select from our library of over 1,500 coding challenges or create your<br /> own.</p><br />
                    <p>Get started by providing the initial details for your contest.</p>
                </div>
            </div>
            <div className="container">
                <div className="form">
                    <div className="row my-5">
                        <div className="col-2">
                            <label htmlFor="contest" className='form-label'>Contest Name</label>
                        </div>
                        <div className="col-3">
                            <input type="text" className='form-control border border-dark' />
                        </div>

                    </div>
                    <div className="row my-5">
                        <div className="col-2">
                            <label htmlFor="contest" className='form-label'>Start Time</label>
                        </div>
                        <div className="col-3">
                            <input type="text" className='form-control  border border-dark' />
                        </div>

                    </div>
                    <div className="row my-5">
                        <div className="col-2">
                            <label htmlFor="contest" className='form-label'>End Time</label>
                        </div>
                        <div className="col-3">
                            <input type="text" className='form-control  border border-dark' />
                            <div className="form-check my-2">
                                <input className="form-check-input  border border-dark" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                   This contest has no end time.
                                </label>
                            </div>
                        </div>


                    </div>
                    <div className="row my-5">
                        <div className="col-2">
                            <label htmlFor="contest" className='form-label'>Organization Type</label>
                        </div>
                        <div className="col-3">
                            <input type="text" className='form-control  border border-dark' />
                        </div>

                    </div>
                    <div className="row my-5">
                        <div className="col-2">
                            <label htmlFor="contest" className='form-label'>Organization Name</label>
                        </div>
                        <div className="col-3">
                            <input type="text" className='form-control  border border-dark' />
                        </div>

                    </div>
                </div>
                <div className=' pb-5'>
                    <button className='btn btn-success fst-italic px-4'>Get Started</button>
                </div>
            </div>
            <div className='mt-5'>
            <hr />
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

export default CreateContest