import React from 'react'

const Home = () => {
  return (
    <div  >
      <div className="container " >
        <div className=" d-flex justify-content-center  lh-sm " style={{paddingTop:"150.2px", fontSize:"60px", fontWeight:"bold"}}>
          <span>Skills Speaks louder<br/><span style={{marginInline:"100px"}}> than words</span></span>
          
        </div>
        <div className='d-flex justify-content-center my-3'>
            <p className='fs-5'>We help companies develop the strongest tech teams around. We help <br/><p className='mx-3 fs-5'>candidates sharpen their tech skills and pursue job opportunities.</p></p>
           
        </div>
        <div className='d-flex justify-content-center'>
            <button className='btn border text-white fw-bold px-5 py-2' style={{backgroundColor:"green"}}>Sign up</button>
            <button className='btn border border-dark ms-4  fw-bold px-4 py-2' >Request demo</button>
        </div>
        <div>
            <p className='fs-5 d-flex justify-content-center my-5'>Over 40% of developers worldwide and 3,000 companies use HackerRank</p>
        </div>
        <div className="client_logos d-flex justify-content-center">
                        <img src="https://1000logos.net/wp-content/uploads/2021/01/Peloton-logo.jpg" alt="" style={{width:"91px",height:"50px"}} />
                        <img className='ms-2' src="https://cdn.freebiesupply.com/images/large/2x/atlassian-logo-black-transparent.png" alt="" style={{width:"139px", height:"20px", marginTop:"10px"}} />
                        <img className='ms-2' src="https://1000logos.net/wp-content/uploads/2017/08/Bloomberg-Logo-2004.jpg" alt="" style={{width:"91px", height:"50px"}} />
                        <img className='ms-3' src="https://e7.pngegg.com/pngimages/299/76/png-clipart-vmware-logo-icons-logos-emojis-tech-companies.png" alt="" style={{width:"91px", height:"10px",marginTop:'20px'}}/>
                        <img className='ms-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Stripe_logo%2C_revised_2014.png/1200px-Stripe_logo%2C_revised_2014.png" alt="" style={{width:"90px",height:'20px',marginTop:"15px"}} />
                        <img className='ms-2' src="https://i.pinimg.com/originals/9b/91/c5/9b91c5be6f8e1963709f2bfc0ba46317.jpg" alt="" style={{width:"121px", height:"30px",marginTop:"12px"}} />
                        <img className='ms-2' src="https://cdn.vox-cdn.com/thumbor/5fTM5k46cYTaGMKlA35PJMgqpPU=/0x0:1920x1080/1400x1050/filters:focal(960x540:961x541)/cdn.vox-cdn.com/uploads/chorus_asset/file/24760594/Adobe_wordmark.jpg" alt=""  style={{width:"89px", height:"50px"}}/>
                        <img className='ms-3' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" alt="" style={{width:"115px", height:"20px", marginTop:"15px"}} />
                    </div>

      </div>
      <div className="container">
        <div className='d-flex justify-content-center lh-sm pt-5'>
            <p style={{fontSize:"56px"}}>It’s not a pipeline problem.<br/><p className='mx-4'>It’s a spotlight problem.</p></p>
        </div>
        <div className='d-flex justify-content-center'>
            <p style={{ textAlign:"center"}}>Tech hiring needs a reset. From prepping for jobs and practicing coding to running a <br/>world-class technical interview, give developers the tools they need to showcase their <br/>skills, passion, and potential.</p>
        </div>
      </div>
    </div>
  )
}

export default Home