import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Gamecard from './components/home/Gamecard'
import './App.css'

function App() {

  const [fiveDollarGames, setFiveDollarGames] = useState([]);
  const [tenDollarGames, setTenDollarGames] = useState([]);
  const [twentyFiveDollarGames, setTwentyFiveDollarGames] = useState([]);
  const [aboveTwentyFiveDollarGames, setAboveTwentyFiveDollarGames] = useState([]);
  const maxGames = 4;

  const getFiveDollarGames = async () => {
    const results = await fetch('http://localhost:3000/dealsUnder5Dollars');
    const resultsJson = await results.json();
    setFiveDollarGames(resultsJson.slice(0, maxGames));
    console.log(resultsJson);
  }

  const getTenDollarGames = async () => {
    const results = await fetch('http://localhost:3000/dealsUnder10Dollars');
    const resultsJson = await results.json();
    setTenDollarGames(resultsJson.slice(0, maxGames));
    console.log(resultsJson);
  }

  const getTwentyFiveDollarGames = async () => {
    const results = await fetch('http://localhost:3000/dealsUnder25Dollars');
    const resultsJson = await results.json();
    setTwentyFiveDollarGames(resultsJson.slice(0, maxGames));
    console.log(resultsJson);
  }

  const getAboveTwentyFiveGames = async () => {
    const results = await fetch('http://localhost:3000/dealsAbove25Dollars');
    const resultsJson = await results.json();
    setAboveTwentyFiveDollarGames(resultsJson.slice(0, maxGames));
    console.log(resultsJson);
  }


  useEffect(() => {
    getFiveDollarGames();
    getTenDollarGames();
    getTwentyFiveDollarGames();
    getAboveTwentyFiveGames();
  }, []);



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

        <div className='row'>
          <h2 className='text-start mt-5'>$0 - $4.99</h2>
            {fiveDollarGames.map((game, index) => (
              <div key={index} className='col-md-3'>
                <Gamecard
                  thumbnail={game.thumb}
                  title={game.title}
                  price={game.salePrice}
                  dealId={game.dealID}
                />
              </div>
            ))}
          <a href="#" className='mt-2'>See More</a>
        </div>

        <div className='row'>
          <h2 className='text-start mt-5'>$5 - $9.99</h2>
            {tenDollarGames.map((game, index) => (
              <div key={index} className='col-md-3'>
                <Gamecard
                  thumbnail={game.thumb}
                  title={game.title}
                  price={game.salePrice}
                  dealId={game.dealID}
                />
              </div>
            ))}
          <a href="#" className='mt-2'>See More</a>
        </div>

        <div className='row'>
          <h2 className='text-start mt-5'>$10 - $24.99</h2>
            {twentyFiveDollarGames.map((game, index) => (
              <div key={index} className='col-md-3'>
                <Gamecard
                  thumbnail={game.thumb}
                  title={game.title}
                  price={game.salePrice}
                  dealId={game.dealID}
                />
              </div>
            ))}
          <a href="#" className='mt-2'>See More</a>
        </div>

        <div className='row'>
          <h2 className='text-start mt-5'>$25.00 +</h2>
            {aboveTwentyFiveDollarGames.map((game, index) => (
              <div key={index} className='col-md-3'>
                <Gamecard
                  thumbnail={game.thumb}
                  title={game.title}
                  price={game.salePrice}
                  dealId={game.dealID}
                />
              </div>
            ))}
          <a href="#" className='mt-2'>See More</a>
        </div>
      </div>
    </>
  )
}

export default App
