import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import brandLogo from '../assets/nld_logo.png'
import '../App.css'


function Search() {

  const [allDeals, setAllDeals] = useState([]);
  const [filteredDeals, setFilteredDeals] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [pageNum, setPageNum] = useState(0);

  const getAllGames = async (currPage) => {
    const results = await fetch(`http://localhost:3000/allDeals/${currPage}`);
    const resultsJson = await results.json();

    setAllDeals(resultsJson);
    setFilteredDeals(resultsJson);
    console.log(resultsJson);
  }

  useEffect(() => {
    getAllGames(pageNum);
  }, [pageNum]);

  const filterDeals = (minPrice, maxPrice) => {
    const filtered = allDeals.filter(
      (game) => game.salePrice >= minPrice && game.salePrice <= maxPrice
    );
    setFilteredDeals(filtered);
  };
  const showAllDeals = () => {
    setFilteredDeals(allDeals);
  };
  const sortDealsByPrice = (deals) => {
    return deals.sort((a, b) => a.salePrice - b.salePrice);
  };
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = allDeals.filter((game) =>
      game.title.toLowerCase().includes(query)
    );
    setFilteredDeals(filtered);
  };

  const handleNext = () => {
    setPageNum(prevPageNum => prevPageNum + 1);
  }

  const handlePrev = () => {
    if (pageNum == 0) {
      return;
    }
    setPageNum(prevPageNum => prevPageNum - 1);
  }

  console.log(pageNum);

  return (
    <>
      <Navbar />
      <div id='nav-logo-container' className='mt-5 rounded'>
        <img id='nav-logo' src={brandLogo} className='rounded' alt="" />
      </div>

      <h1 className='mt-5 text-light'> Search Games</h1>

      <div className="row justify-content-center mt-4">
        <button type='button' className='btn btn-dark col-2 me-1' onClick={() => filterDeals(0, 4.99)}> $0 - $4.99   </button>
        <button type='button' className='btn btn-dark col-2 me-1' onClick={() => filterDeals(5, 9.99)}> $5 - $9.99   </button>
        <button type='button' className='btn btn-dark col-2 me-1' onClick={() => filterDeals(10, 24.99)}> $10 - $24.99 </button>
        <button type='button' className='btn btn-dark col-2 me-1' onClick={() => filterDeals(25, Infinity)}> $25+         </button>
        <button type='button' className='btn btn-dark col-2 me-1' onClick={showAllDeals}> All Games </button>
      </div>

      <div className="row justify-content-center mt-4">
        <input
          type="text"
          className="form-control col-6"
          placeholder="Search by game title"
          value={searchQuery}
          onChange={handleSearch}

        />
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
          {sortDealsByPrice(filteredDeals).map((game, index) => (
            <tr key={index}>
              <td>{game.normalPrice}</td>
              <td>{game.salePrice}</td>
              <td>
              <Link to={`https://www.cheapshark.com/redirect?dealID=${game.dealID}`} className='text-light'>
                  {game.title}
                </Link>
              </td>
              <td>{game.steamRatingPercent}</td>
            </tr>
          ))}
        </tbody>

      </table>

      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <Link className={"page-link" + (pageNum === 0 ? " disabled" : "")} onClick={handlePrev}>Prev</Link>
          </li>
          <li className="page-item">
            <Link className={"page-link" + (pageNum === 50 ? " disabled" : "")} onClick={handleNext}>Next</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Search