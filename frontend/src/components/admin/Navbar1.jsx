import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar1 = () => {
  return (
    <div>
        <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand ms-3" href="#">
      <h3 className='fw-bold'>HackerRank</h3>
     {/* <img  src="https://camo.githubusercontent.com/f56bc841c383e59f9d9680ad2788eb9f68adc151f3b4eee2a488bb7f758a28cd/68747470733a2f2f656e637279707465642d74626e302e677374617469632e636f6d2f696d616765733f713d74626e253341414e6439476354364f7852466444776a705070384d38384535716275354274376950395a566d4343705126757371703d434155" alt=""
            height={40}
             /> */}
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
        <li className="nav-item">
          <Link className="nav-link  fw-semibold" aria-current="page" href="#" to={"/topics"}>
           Prepare
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-semibold" href="#" to={"/certificate"}>
           Certify
          </Link>
        </li>
        {/* <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link fw-semibold" aria-disabled="true" to={"/compete"}>
            Compete
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-semibold" aria-disabled="true" to={"/dashboard"}>
            Apply
          </Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar1