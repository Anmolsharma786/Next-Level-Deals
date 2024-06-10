import React from 'react'
import reactLogo from '../../assets/react.svg'

const Gamecard = ({thumbnail, title, price, dealId}) => {


  return (
    <>

        <div className="card">
          <img src={thumbnail} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">${price}</p>
            <a href={`https://www.cheapshark.com/redirect?dealID=${dealId}`} className="btn btn-primary">Buy Now</a>
          </div>
        </div>

    </>
  )
}

export default Gamecard