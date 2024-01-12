import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import './Solutions.css'
import Navbar1 from './Navbar1';
import MDEditor from '@uiw/react-md-editor';
// import { log } from 'console';


const Solutions = () => {

    const { id } = useParams();

    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');
    const [userData,setUserData] = useState({});



    const handleSubmit = async () => {

        const payload = {
            language: "cpp",
            code,

        };
        try {
            const { data }   = await axios.post('http://localhost:5000/run', payload);
            setOutput(data.output);
        }
        catch (err) {
            console.log(err.responce);
        }
    }

    
    const fetchPlanData = async () => {
        const res = await fetch("http://localhost:5000/addsolution/getbyid/" +id );
        console.log(res.status);

        const data = await res.json();
        console.log(data);
        setUserData(data);
    };

    useEffect(() => {
        fetchPlanData();
    }, []);



    return (
        <div>
           
            <div className="container-fluid px-0">
                <div className="row">
                    <div className="col-6 left">
                        <div className="container-fluid px-0 mx-0">
                            <div className="row">
                                <div className="col-2" ></div>
                                <div className="col-8">
                                   <div>
                                    {
                                        userData.solution
                                    }
                                    <MDEditor.Markdown source={userData.content} style={{whiteSpace: "pre-wrap"}} />
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 right ">
                        <div className="container">
                            <div className="card">
                                <div className="card-header d-flex justify-content-end">
                                    <span className="text-primary">Change Theme</span>
                                    <label htmlFor="language" className="ms-3">
                                        Language
                                    </label>
                                    <select name="" id="language" className="btn btn-outline-dark ms-2">
                                        <option value="">C</option>
                                        <option value="">C++</option>
                                        <option value="">Java</option>
                                    </select>
                                </div>
                                <div className="card-body cont">
                                    {/* code compiler */}

                                    <h1>Online Code Compiler</h1>
                                    <textarea name="" id="" cols="75" rows="20" value={code} onChange={(e) => { setCode(e.target.value) }}></textarea>
                                </div>
                                <div className="card-footer my-2 ">

                                    <a href="">UploadeCodeasFile</a>
                                    <input type="checkbox" id="input" className="ms-2" />
                                    <label htmlFor="input">Test against custom input </label>
                                    <button className="btn btn-light ms-5">Run Code</button>
                                    <button className="btn btn-success " type='submit' onClick={handleSubmit}>Submit Code</button>
                                    <p>{output}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Solutions;
