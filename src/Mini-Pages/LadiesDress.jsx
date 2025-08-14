import React from 'react'
import { Link } from 'react-router-dom'
import combo4 from "../images/combo4.jpg"
import combo3 from "../images/combo3.jpg"
const LadiesDress = () => {
  return (
    <div>
        <div className="container py-4" id='ladies'>
      <div className="row">
       <div className="col-12 col-md-6 col-lg-6">
                  <img src={combo3} alt="" />
                 <Link to="/product/page10" style={{ textDecoration:"none", color:"black" }}>
                   <h1>Combo Seller of the week</h1>
                    <h2>Party hard</h2>
                    <p>Women's jean short, black and white polo, black flat shoe and a sunshade, made off quality and original style for groove</p>
                    </Link>
                     <span className='original-price'>$2760.00</span>
                    <span className='discounted-price'>$2150.00</span>
               
        </div>
       <div className="col-12 col-md-6 col-lg-6">
                     <img src={combo4} alt="" /> 
                <Link to="/product/page9" style={{ textDecoration:"none", color:"black" }}>
                 <h1>Seller of the week</h1>
                    <h2>Luxury combo</h2>
                <p>Colorful set of jean short, brown shirt,orange face cap, gld white colored shoe and Nike wrist watch</p>
                  </Link>
                     <span className='original-price'>$2760.00</span>
                  <span className='discounted-price'>$2150.00</span>
              </div>
         </div>
       </div>
    </div>
  )
}

export default LadiesDress
