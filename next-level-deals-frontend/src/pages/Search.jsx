import React, { useEffect, useRef, useState } from 'react'
import {Link, useSearchParams} from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import brandLogo from '../assets/nld_logo.png'
import '../App.css'


function Search() {

  const tableRef = useRef(null);
  const [filteredDeals, setFilteredDeals] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [pageNum, setPageNum] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  let [searchParams] = useSearchParams();
  const min = searchParams.get('min');
  const max = searchParams.get('max');

  const getAllGames = async (currPage) => {

    const results = await fetch(`https://next-level-deals-4mlr.vercel.app/api/allDeals/${currPage}/${(min)}/${(max)}`);
    const resultsJson = await results.json();
    
    setFilteredDeals(resultsJson.data);
    setTotalPages(resultsJson.totalPages);
    console.log(resultsJson);
  }

  useEffect(() => {
    getAllGames(pageNum);
  }, [pageNum, min, max]);


  const sortDealsByPrice = (deals) => {
    return deals.sort((a, b) => a.salePrice - b.salePrice);
  };

  const handleSearch = async (event) => {
    const gameTitle = event.target.value.toLowerCase();
    setSearchQuery(gameTitle);
  };

  const performSearch = async (gameTitle) => {
    const results = await fetch(`https://next-level-deals-4mlr.vercel.app/api/searchDeals/${gameTitle}`);
    const resultsJson = await results.json();
    setFilteredDeals(resultsJson.data);
    setTotalPages(resultsJson.totalPages);
    setPageNum(0);
  }

  const handleNext = () => {
    setPageNum(prevPageNum => prevPageNum + 1);
    if (tableRef.current) {
      tableRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const handlePrev = () => {
    if (pageNum == 0) {
      return;
    }
    setPageNum(prevPageNum => prevPageNum - 1);
  }

  const isSelected = (expectedMin, expectedMax) => {
    return parseFloat(min) === expectedMin && parseFloat(max) === expectedMax;
  };

  const checkRating = (steamRating) => {
    console.log(steamRating);
    const noRating = '~'
    if (steamRating === '0') {
      return noRating
    } else {
      return steamRating
    }
  }

  return (
    <>
      <Navbar />
      <div id='nav-logo-container' className='mt-5 rounded'>
        <img id='nav-logo' src={brandLogo} className='rounded' alt="" />
      </div>

      <h1 ref={tableRef} className='mt-5 text-light'> Search Games</h1>

      {/* Filter Buttons */}
      <div className="row justify-content-center mt-4">
        <li>
          <Link to={`/api/search?min=0&max=4.99`}>
            <button type='button' className={`btn btn-dark col-2 me-1 ${isSelected(0, 4.99) ? 'selected' : ''}`} onClick={() => setPageNum(0)}>
              $0 - $4.99
            </button>
          </Link>
          <Link to={`/api/search?min=5&max=9.99`}>
            <button type='button' className={`btn btn-dark col-2 me-1 ${isSelected(5, 9.99) ? 'selected' : ''}`} onClick={() => setPageNum(0)}>
              $5 - $9.99
            </button>
          </Link>
          <Link to={`/api/search?min=10&max=24.99`}>
            <button type='button' className={`btn btn-dark col-2 me-1 ${isSelected(10, 24.99) ? 'selected' : ''}`} onClick={() => setPageNum(0)}>
              $10 - $24.99
            </button>
          </Link>
          <Link to={`/api/search?min=25&max=50`}>
            <button type='button' className={`btn btn-dark col-2 me-1 ${isSelected(25, 50) ? 'selected' : ''}`} onClick={() => setPageNum(0)}>
              $25+
            </button>
          </Link>
          <Link to={`/api/search?min=0&max=50`}>
            <button type='button' className={`btn btn-dark col-2 me-1 ${isSelected(0, 50) ? 'selected' : ''}`} onClick={() => setPageNum(0)}>
              All Games
            </button>
          </Link>
        </li>
      </div>

      {/* Search Box */}
      <div className="row justify-content-center mt-4">
        <input
          type="text"
          className="form-control col-6"
          placeholder="Search by game title"
          value={searchQuery}
          onChange={handleSearch}
          onKeyUp={event => {
            if (event.key === 'Enter') {
                performSearch(searchQuery);
                event.preventDefault();
            }
          }}
        />
      </div>

      {/* Top Pagination */}
      <nav className="mt-4" aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <Link className={"page-link" + (pageNum === 0 ? " disabled" : "")} onClick={handlePrev}>Prev</Link>
          </li>
          <li>
            <h6 className='ms-3 me-3 mt-2 text-light'>Page: {pageNum+1}/{totalPages}</h6>
          </li>
          <li className="page-item">
            <Link className={"page-link" + (pageNum === totalPages ? " disabled" : "")} onClick={handleNext}>Next</Link>
          </li>
        </ul>
      </nav>

      {/* Game Table */}
      <table className="table table-dark table-hover mt-5">
        <thead>
          <tr className='justify-content-center'>
            <th className="table-header" scope="col-1">Original Price ($)</th>
            <th className="table-header" scope="col-1">Sale Price ($)</th>
            <th className="table-header" scope="col-1">Thumbnail</th>
            <th className="table-header" scope="col-3">Game Title</th>
            <th className="table-header" scope="col-1">Steam Rating (%)</th>
          </tr>
        </thead>

        <tbody>
          { filteredDeals ? sortDealsByPrice(filteredDeals).map((game, index) => (
            <tr key={index}>
              <td id="original-price"><s>{game.normalPrice}</s></td>
              <td id="sale-price">{game.salePrice}</td>
              <td id="image-cell"><img className="search-img" src={game.thumb} alt="" /></td>
              <td id="title-cell">
                <Link id="search-redirect" to={`https://www.cheapshark.com/redirect?dealID=${game.dealID}`} className='text-light'>
                  {game.title}
                </Link>
              </td>
              <td id="rating-cell">
                {checkRating(game.steamRatingPercent)}
              </td>
            </tr>
            )) : (<tr className='text-center'><td>Loading Games ...</td></tr>)
          }
        </tbody>


      </table>

      {/* Bottom Pagination */}
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <Link className={"page-link" + (pageNum === 0 ? " disabled" : "")} onClick={handlePrev}>Prev</Link>
          </li>
          <li>
            <h6 className='ms-3 me-3 mt-2 text-light'>Page: {pageNum+1}/{totalPages}</h6>
          </li>
          <li className="page-item">
            <Link className={"page-link" + (pageNum === totalPages ? " disabled" : "")} onClick={handleNext}>Next</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Search