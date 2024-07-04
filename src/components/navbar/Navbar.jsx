import React from 'react'
import './Navbar.css'
import brandLogo from '../../assets/nld_logo.png'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg rounded">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Search</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar