import { useState, useEffect } from 'react'
import Gamecard from './components/home/Gamecard'
import Navbar from './components/navbar/Navbar'
import brandLogo from './assets/nld_logo.png'
import './App.css'

function App() {

  const [fiveDollarGames, setFiveDollarGames] = useState([]);
  const [tenDollarGames, setTenDollarGames] = useState([]);
  const [twentyFiveDollarGames, setTwentyFiveDollarGames] = useState([]);
  const [aboveTwentyFiveDollarGames, setAboveTwentyFiveDollarGames] = useState([]);
  const maxGames = 4;

  const getFiveDollarGames = async () => {
    const results = await fetch('https://server-djoq276oh-anmolsharma786s-projects.vercel.app/api/dealsUnder5Dollars', {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const resultsJson = await results.json();
    setFiveDollarGames(resultsJson.slice(0, maxGames));
    console.log(resultsJson);
  }

  const getTenDollarGames = async () => {
    const results = await fetch('https://server-b43sg2zqa-anmolsharma786s-projects.vercel.app/api/dealsUnder10Dollars');
    const resultsJson = await results.json();
    setTenDollarGames(resultsJson.slice(0, maxGames));
    console.log(resultsJson);
  }

  const getTwentyFiveDollarGames = async () => {
    const results = await fetch('https://server-b43sg2zqa-anmolsharma786s-projects.vercel.app/api/dealsUnder25Dollars');
    const resultsJson = await results.json();
    setTwentyFiveDollarGames(resultsJson.slice(0, maxGames));
    console.log(resultsJson);
  }

  const getAboveTwentyFiveGames = async () => {
    const results = await fetch('https://server-b43sg2zqa-anmolsharma786s-projects.vercel.app/api/dealsAbove25Dollars');
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
      <Navbar />
      <div id='nav-logo-container' className='mt-5 rounded'>
        <img id='nav-logo' src={brandLogo} className='rounded' alt="" />
      </div>

      <div className="container mt-5">

        <div className='row'>
          <h2 className='text-start mt-3 text-light'>$0 - $4.99</h2>
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
        </div>

        <div className='row'>
          <h2 className='text-start mt-5 text-light'>$5 - $9.99</h2>
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
        </div>

        <div className='row'>
          <h2 className='text-start mt-5 text-light'>$10 - $24.99</h2>
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
        </div>

        <div className='row'>
          <h2 className='text-start mt-5 text-light'>$25.00 +</h2>
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
        </div>
      </div>
    </>
  )
}

export default App
