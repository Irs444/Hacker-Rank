import React from 'react'

const Solution = () => {
    return (
        <div>
            <div className='container-fluid px-0'>
                <div className="row ">
                    <div className="col-6 p-0 h-30  overflow-y-scroll ">
                        <div className='container-fluid'>
                            <div className="row">
                                <div className="col-2">
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="#">Active</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Link</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Link</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-8">
                                    <div className="">
                                        <p>Given an array of integers, find the sum of its elements.</p>
                                        <p>For example, if the array <span className='fw-bold'>ar = [1,2,3], 1+2+3 = 6,</span><span> so return</span> <span className='fw-bold'>6.</span></p>
                                        <p className='fw-bold'>Function Description</p>
                                        <p>Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.</p>
                                        <p>simpleArraySum has the following parameter(s):</p>
                                        <ul>
                                            <li>ar: an array of integers</li>
                                        </ul>
                                        <p className="fw-bold">Input Format</p>
                                        <p>The first line contains an integer, , denoting the size of the array.
                                            The second line contains  space-separated integers representing the array's elements.</p>
                                        <p className='fw-bold'>Constraints</p>
                                        <p className='fst-italic' >0 &lt;n, ar[i]&lt;1000</p>
                                        <p className='fw-bold'>Output Format</p>
                                        <p>Print the sum of the array's elements as a single integer.</p>
                                        <div className="sample">
                                         <p className='fw-bold'>Sample Input</p>
                                         <div className='bg-primary-subtle p-2 ms-4 w-50'>
                                            <p className='mb-1'>6</p>
                                            <p className='mb-1'>1 2 3 4 10 11</p>
                                            </div>
                                         </div>
                                         <div className="sample my-3">
                                         <p className='fw-bold'>Sample Output</p>
                                         <div className='bg-primary-subtle p-2 ms-4 w-50'>
                                            <p>31</p>
                                           
                                            </div>
                                         </div>
                                         <p className='fw-bold'>Explanation</p>
                                         <p>We print the sum of the array's elements:<span className='ms-2 fw-bold'>1+2+3+4+10+11=31</span></p>
                                    </div>
                                
                                </div>



                            </div>
                        </div>
                    </div>
                    <div className="col-6 p-0 h-30 overflow-scroll ">column2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solution