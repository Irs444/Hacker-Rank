import React from 'react'

const Questions = () => {
  return (
    <div>
        <div className="container my-4">
            <div className=" d-flex justify-content-between">
                <div className="item">
                    <p className='mb-2'>Prepare </p>
                    <h3>Problem Solving</h3>
                </div>
                <div className="item ">
                    <p className='mb-1'><span className='text-danger'>30 more point</span> to get your star!</p>
                    <progress value="10" max="100"></progress>
                    <div className="score">
                        <span >Rank: 5368657</span>
                        <span className='ms-3'>Points: 0/30</span>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div className="container ">
           <div className="d-flex justify-content-start">
            <p>Algoriths</p>
            <p className='ms-3'>Data Structure</p>
           </div>
           <div className="row my-4 ">
            <div className="col-8 ">
                <div className="row my-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="item">
                                <h4>Solve Me First</h4>
                                <span className='text-success'>Easy,</span>
                                <span>Problem Solving(basic),</span>
                                <span>Max Score: 1,</span>
                                <span>Success Rate: 88%</span>
                            </div>
                            <div className="item d-flex justify-content-between my-2">
                                <p>This is an easy challenge to help you start coding in your<br/> favorite languages!</p>
                                <button className='btn btn-success m-3' >Try Again </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="item">
                                <h4>Simple Array Sum</h4>
                               
                            </div>
                            <div className="span d-flex justify-content-between">
                                <div>
                            <span className='text-success'>Easy,</span>
                                <span>Problem Solving(basic),</span>
                                <span>Max Score: 10,</span>
                                <span>Success Rate: 88%</span>
                                </div>
                                <button className='btn btn-success me-3'>Try Again</button>
                            </div>
                           
                        </div>
                    </div>
                </div>
                <div className="row my-3">
                <div className="card">
                        <div className="card-body">
                            <div className="item">
                                <h4>Compare The Triplets</h4>
                               
                            </div>
                            <div className="span d-flex justify-content-between">
                                <div>
                            <span className='text-success'>Easy,</span>
                                <span>Problem Solving(basic),</span>
                                <span>Max Score: 10,</span>
                                <span>Success Rate: 92.5%</span>
                                </div>
                                <button className='btn btn-success me-3'>Try Again</button>
                            </div>
                           
                        </div>
                    </div>
                </div>
                <div className="row my-3">
                <div className="card">
                        <div className="card-body">
                            <div className="item">
                                <h4>Plus Minus</h4>
                               
                            </div>
                            <div className="span d-flex justify-content-between">
                                <div>
                            <span className='text-success'>Easy,</span>
                                <span>Problem Solving(basic),</span>
                                <span>Max Score: 10,</span>
                                <span>Success Rate: 92.5%</span>
                                </div>
                                <button className='btn btn-success me-3'>Try Again</button>
                            </div>
                           
                        </div>
                    </div>
                </div>
                <div className="row my-3">
                <div className="card">
                        <div className="card-body">
                            <div className="item">
                                <h4>A Very Big Sum</h4>
                               
                            </div>
                            <div className="span d-flex justify-content-between">
                                <div>
                            <span className='text-success'>Easy,</span>
                                <span>Problem Solving(basic),</span>
                                <span>Max Score: 10,</span>
                                <span>Success Rate: 92.5%</span>
                                </div>
                                <button className='btn btn-success me-3'>Try Again</button>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div className="col my-3">
                <div className="status">STATUS</div>
                <div className="checklist-item my-1">
                    <input type="checkbox" id='check' />
                    <label htmlFor="check" className='ms-3'>Solved</label>
                </div>
                <div className="checklist-item">
                    <input type="checkbox" id='check' />
                    <label htmlFor="check" className='ms-3'>Unsolved</label>
                </div>
                <hr />
                <div className="status">SKILLS</div>
                <div className="checklist-item my-1">
                    <input type="checkbox" id='check' />
                    <label htmlFor="check" className='ms-3'>Problem Solving(Intermediate)</label>
                </div>
                <div className="checklist-item my-1">
                    <input type="checkbox" id='check' />
                    <label htmlFor="check" className='ms-3'>Problem Solving(Advance)</label>
                </div>
                <div className="checklist-item">
                    <input type="checkbox" id='check' />
                    <label htmlFor="check" className='ms-3'>Problem Solving(Basic)</label>
                </div>
                <hr />
               
                <div className="status">DIFICULTY</div>
                <div className="checklist-item my-1">
                    <input type="checkbox" id='check' />
                    <label htmlFor="check" className='ms-3'>Easy</label>
                </div>
                <div className="checklist-item my-1">
                    <input type="checkbox" id='check' />
                    <label htmlFor="check" className='ms-3'>Medium</label>
                </div>
                <div className="checklist-item">
                    <input type="checkbox" id='check' />
                    <label htmlFor="check" className='ms-3'>Hard</label>
                </div>
                <hr />
                <div className="status">SUBDOMAINS</div>
                <div className="checklist-item my-1">
                    <input type="checkbox" id='check' />
                    <label htmlFor="check" className='ms-3'>Warmup</label>
                </div>
                <div className="checklist-item my-1">
                    <input type="checkbox" id='check' />
                    <label htmlFor="check" className='ms-3'>Implementation</label>
                </div>
                <div className="checklist-item my-1">
                    <input type="checkbox" id='check' />
                    <label htmlFor="check" className='ms-3'>Strings</label>
                </div>
                <div className="checklist-item my-1">
                    <input type="checkbox" id='check' />
                    <label htmlFor="check" className='ms-3'>Shorting</label>
                </div>
                <div className="checklist-item my-1">
                    <input type="checkbox" id='check' />
                    <label htmlFor="check" className='ms-3'>Search</label>
                </div>
                <div className="checklist-item my-1">
                    <input type="checkbox" id='check' />
                    <label htmlFor="check" className='ms-3'>Graph Theory</label>
                </div>
                <div className="checklist-item ">
                    <input type="checkbox" id='check' />
                    <label htmlFor="check" className='ms-3'>Dynamic Programming</label>
                </div>
              
            </div>
           </div>
        </div>
    </div>
  )
}

export default Questions