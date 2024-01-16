import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
// import "./App.css";
import stubs from "./stubs";
import moment from "moment";

import './Solutions.css'
// import Navbar1 from './Navbar1';
import MDEditor from '@uiw/react-md-editor';
// import { log } from 'console';


const Solutions = () => {

    const { id } = useParams();
    const [userData, setUserData] = useState({});
  
    // compiler start
    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');
    const [language, setLanguage] = useState("cpp");
    const [jobId, setJobId] = useState(null);
    const [status, setStatus] = useState(null);
    const [jobDetails, setJobDetails] = useState(null);

    // compiler end


    // start compiler
     
    useEffect(() => {
        setCode(stubs[language]);
      }, [language]);
    
      useEffect(() => {
        const defaultLang = localStorage.getItem("default-language") || "cpp";
        setLanguage(defaultLang);
      }, []);
    
      let pollInterval;
    
      const handleSubmit = async () => {
        const payload = {
          language,
          code,
        };
        try {
          setOutput("");
          setStatus(null);
          setJobId(null);
          setJobDetails(null);
          const { data } = await axios.post("http://localhost:5000/run", payload);
          if (data.jobId) {
            setJobId(data.jobId);
            setStatus("Submitted.");
    
            // poll here
            pollInterval = setInterval(async () => {
              const { data: statusRes } = await axios.get(
                `http://localhost:5000/status`,
                {
                  params: {
                    id: data.jobId,
                  },
                }
              );
              const { success, job, error } = statusRes;
              console.log(statusRes);
              if (success) {
                const { status: jobStatus, output: jobOutput } = job;
                setStatus(jobStatus);
                setJobDetails(job);
                if (jobStatus === "pending") return;
                setOutput(jobOutput);
                clearInterval(pollInterval);
              } else {
                console.error(error);
                setOutput(error);
                setStatus("Bad request");
                clearInterval(pollInterval);
              }
            }, 1000);
          } else {
            setOutput("Retry again.");
          }
        } catch ({ response }) {
          if (response) {
            const errMsg = response.data.err.stderr;
            setOutput(errMsg);
          } else {
            setOutput("Please retry submitting.");
          }
        }
      };
    
      const setDefaultLanguage = () => {
        localStorage.setItem("default-language", language);
        console.log(`${language} set as default!`);
      };
    
      const renderTimeDetails = () => {
        if (!jobDetails) {
          return "";
        }
        let { submittedAt, startedAt, completedAt } = jobDetails;
        let result = "";
        submittedAt = moment(submittedAt).toString();
        result += `Job Submitted At: ${submittedAt}  `;
        if (!startedAt || !completedAt) return result;
        const start = moment(startedAt);
        const end = moment(completedAt);
        const diff = end.diff(start, "seconds", true);
        result += `Execution Time: ${diff}s`;
        return result;
      };

    //end compiler


    // const handleSubmit = async () => {

    //     const payload = {
    //         language: "cpp",
    //         code,

    //     };
    //     try {
    //         const { data }   = await axios.post('http://localhost:5000/run', payload);
    //         setOutput(data.output);
    //     }
    //     catch (err) {
    //         console.log(err.responce);
    //     }
    // }

    
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
                                        userData !== null && (
                                          <MDEditor.Markdown source={userData.solution} style={{whiteSpace: "pre-wrap"}} />

                                        )
                                    }
                                    
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 right ">
                        {/* <div className="container">
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
                        </div> */}
                          <div className="App">
      <h1>Online Code Compiler</h1>
      <div>
        <label>Language:</label>
        <select
          value={language}
          onChange={(e) => {
            const shouldSwitch = window.confirm(
              "Are you sure you want to change language? WARNING: Your current code will be lost."
            );
            if (shouldSwitch) {
              setLanguage(e.target.value);
            }
          }}
        >
          <option value="cpp">C++</option>
          <option value="py">Python</option>
        </select>
      </div>
      <br />
      <div>
        <button onClick={setDefaultLanguage}>Set Default</button>
      </div>
      <br />
      <textarea
        rows="20"
        cols="75"
        value={code}
        onChange={(e) => {
          setCode(e.target.value);
        }}
      ></textarea>
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <p>{status}</p>
      <p>{jobId ? `Job ID: ${jobId}` : ""}</p>
      <p>{renderTimeDetails()}</p>
      <p>{output}</p>
    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Solutions;
