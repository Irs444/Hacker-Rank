import React from 'react'

const Navbar = () => {
    return (
        <div >
            <div  style={{width:"100vw", height:"100vh"}}>
            <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand ms-5" href="#">
                        HackerRank
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a 
                                    className="nav-link dropdown-toggle" 
                                    aria-current="page" 
                                    href="#"  role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Product
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Screen
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Interview
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Certified Assessment
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Plagiarism Detection
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Real Word Question
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a  
                                    className="nav-link dropdown-toggle" 
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    >
                                    Solutions
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                         Setup your Skill strategy
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Showcase your talent Brand
                                        </a>
                                    </li>
                                    <li>
                                       
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Optimiize your Hiring Skill
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Mobilize your internal talent
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                           Embrace AI
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Resurces
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                           Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                           Roles Directory
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                          Resources Library
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                          Customer Stories
                                        </a>
                                    </li>
                                    
                                    
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Partner
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Integration
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            What's New
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                          Support center
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-disabled="true">
                                    Pricing
                                </a>
                            </li>
                            <li className="nav-item ms-5">
                                <a className="nav-link" aria-disabled="true">
                                    For Developrs
                                </a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            {/* <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            /> */}
                            <button className="btn btn-light me-2" type="submit">
                                Request Demo
                            </button>
                            <button className="btn btn-success me-5" type="submit">
                               Signup
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
            </div>

        </div>
    )
}

export default Navbar