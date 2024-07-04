import React from 'react'
import reactLogo from '../../assets/react.svg'
import './Home.css'

const Gamecard = ({thumbnail, title, price, dealId}) => {

  return (
    <>
      <div className="card rounded">
        <div className="img-container rounded-top">
          <img src={thumbnail} className="card-img-top" />
        </div>
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          <p className="card-text">${price}</p>

          <a id='purchase-btn' href={`https://www.cheapshark.com/redirect?dealID=${dealId}`} className="btn btn-primary mx-auto">Buy Now</a>

        </div>
      </div>

    </>
  )
}

export default Gamecard