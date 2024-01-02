import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();
    const signpage = () => {
        navigate("/signup")
    }

    const logpage = () => {
        navigate("/login")
    } 
    return (
        <div >

            <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand ms-5 fw-bold" href="#">
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
                                    className="nav-link dropdown-toggle text-white"
                                    aria-current="page"
                                    href="#" role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Product
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item " href="#">
                                            Screen
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href="#">
                                            Interview
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href="#">
                                            Certified Assessment
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href="#">
                                            Plagiarism Detection
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href="#">
                                            Real Word Question
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle text-white"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Solutions
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" href="#">
                                            Setup your Skill strategy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href="#">
                                            Showcase your talent Brand
                                        </Link>
                                    </li>
                                    <li>

                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href="#">
                                            Optimiize your Hiring Skill
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href="#">
                                            Mobilize your internal talent
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href="#">
                                            Embrace AI
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle text-white"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Resurces
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" href="#">
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href="#">
                                            Roles Directory
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href="#">
                                            Resources Library
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href="#">
                                            Customer Stories
                                        </Link>
                                    </li>


                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href="#">
                                            Partner
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href="#">
                                            Integration
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href="#">
                                            What's New
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href="#">
                                            Support center
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" aria-disabled="true">
                                    Pricing
                                </Link>
                            </li>
                            {/* <li className="nav-item ms-5">
                                <Link className="nav-link" aria-disabled="true" >
                                    For Developrs
                                </Link>
                            </li> */}
                        </ul>
                        <ul className="nav justify-content-end">
                            <li className="nav-item ">
                                <Link className="nav-link text-white fw-semibold" href="#" to={"/signup"}>
                                    For developers
                                </Link>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            {/* <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            /> */}
                            <button className="btn btn-light me-2" type="submit" onClick={logpage}>
                               Login
                            </button>
                            <button className="btn btn-success me-5" type="submit" onClick={signpage}>
                                Signup
                            </button>
                        </form>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Navbar