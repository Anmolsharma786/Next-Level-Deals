import React from 'react'
import Navbar from '../components/navbar/Navbar'
import brandLogo from '../assets/nld_logo.png'
import '../App.css'


function Search() {
  return (
    <>
      <Navbar />
      {/* <div id='nav-logo-container' className='mt-5 rounded'>
        <img id='nav-logo' src={brandLogo} className='rounded' alt="" />
      </div> */}

      <h1 className='mt-5 text-light'> Search Games</h1>

      <div className="row justify-content-center mt-4">
        <button type='button' className='btn btn-dark col-2 me-1'> $0 - $4.99   </button>
        <button type='button' className='btn btn-dark col-2 me-1'> $5 - $9.99   </button>
        <button type='button' className='btn btn-dark col-2 me-1'> $10 - $24.99 </button>
        <button type='button' className='btn btn-dark col-2 me-1'> $25+         </button>
      </div>
    </>
  )
}

export default Search