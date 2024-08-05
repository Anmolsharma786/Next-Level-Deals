import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

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
              <Link className="nav-link active text-light" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-light" to={`/search?min=0&max=50`}>Search</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar