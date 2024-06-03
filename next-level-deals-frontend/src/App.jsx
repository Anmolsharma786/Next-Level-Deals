import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <h1 className=''>Next Level Deals</h1>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <button type='button' className='btn btn-dark col-2 me-1'> $0 - $4.99   </button>
          <button type='button' className='btn btn-dark col-2 me-1'> $5 - $9.99   </button>
          <button type='button' className='btn btn-dark col-2 me-1'> $10 - $24.99 </button>
          <button type='button' className='btn btn-dark col-2 me-1'> $25+         </button>
        </div>
        <div className='row'><br />
        <h2 className='text-start mt-5'>$0 - 4.99</h2>
          <div className='col-md-3'>
            <div className="card">
              <img src={viteLogo} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Game Title</h5>
                <p className="card-text">$0.99</p>
                <a href="#" className="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>

          <div className='col-md-3'>
            <div className="card">
              <img src={viteLogo} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Game Title</h5>
                <p className="card-text">$0.99</p>
                <a href="#" className="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>

          <div className='col-md-3'>
            <div className="card">
              <img src={viteLogo} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Game Title</h5>
                <p className="card-text">$0.99</p>
                <a href="#" className="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>

          <div className='col-md-3'>
            <div className="card">
              <img src={viteLogo} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Game Title</h5>
                <p className="card-text">$0.99</p>
                <a href="#" className="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>
          <a href="#" className='mt-2'>See More</a>

        </div>
      </div>
    </>
  )
}

export default App
