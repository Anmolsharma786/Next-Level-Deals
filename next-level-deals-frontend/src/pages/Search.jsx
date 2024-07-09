import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import brandLogo from '../assets/nld_logo.png'
import '../App.css'


function Search() {

  const [allDeals, setAllDeals] = useState([]);

  const getAllGames = async () => {
    const results = await fetch('http://localhost:3000/allDeals');
    const resultsJson = await results.json();
    setAllDeals(resultsJson);
    console.log(resultsJson);
  }

  useEffect(() => {
    getAllGames();
  }, []);


  return (
    <>
      <Navbar />
      <div id='nav-logo-container' className='mt-5 rounded'>
        <img id='nav-logo' src={brandLogo} className='rounded' alt="" />
      </div>

      <h1 className='mt-5 text-light'> Search Games</h1>

      <div className="row justify-content-center mt-4">
        <button type='button' className='btn btn-dark col-2 me-1'> $0 - $4.99   </button>
        <button type='button' className='btn btn-dark col-2 me-1'> $5 - $9.99   </button>
        <button type='button' className='btn btn-dark col-2 me-1'> $10 - $24.99 </button>
        <button type='button' className='btn btn-dark col-2 me-1'> $25+         </button>
      </div>

      <table className="table table-dark table-hover mt-5">

        <thead>
          <tr>
            <th scope="col">Normal Price</th>
            <th scope="col">Discounted Price</th>
            <th scope="col">Game Title</th>
            <th scope="col">Steam Rating</th>
          </tr>
        </thead>

        <tbody>
          {allDeals.map((game, index) => (
            <tr key={index}>
              <td>{game.normalPrice}</td>
              <td>{game.salePrice}</td>
              <td>
                <Link className='text-light'>
                  {game.title}
                </Link></td>
              <td>{game.steamRatingPercent}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </>
  )
}

export default Search