import React from 'react'
import { Link } from 'react-router-dom'
import red from '../images/pic4.jpeg'
import redone from '../images/pic6.jpeg'
import redtwo from '../images/pic5.jpeg'
import Woman6 from '../Mini-Pages/Woman6';
const BestSeller = () => {
  return (
    <div className="bestseller">
      <div className='container py-5' id='men-seller'>
      <div className="row">
     <div className="col-12 col-md-6 col-lg-6">
      <h2>Best Selling Men of the Week<br></br><span style={{color:"darkred"}}>Men's Nike Miler</span></h2>
       <p>Men's Repel Running Jacket is a Nike inspired by the 1989 film Back to the Future II1. The Jacket feature an electroluminescent outsole, space-age materials, and a rechargeable internal battery2. An italian jacket made with a greek 1908 inspiration and a black pant that goes with it</p>
      <Link to="/product/page8" style={{color:"darkred", textDecoration:"none", fontWeight:"bold"}}>ORDER NOW!!!!</Link> <br />
       <span className='original-price'>$1450.00</span>
       <span className='discounted-price'>$1050.00</span>
      </div>
      <div className="col-12 col-md-6 col-lg-6">
      <Woman6/>
      </div>
      
      </div>
      </div>
      <div className="container" id='BestSneakers'>
      <h2>Sneakers of the Month<br></br><span style={{ color:"darkred"}}>The Nike SB</span></h2>
      <p>The shoe is constructed with an all-leather build that features an orange upper and desert white tan colored overlays. <br/>
       The Swoosh is highlighted in the same desert color, as is the Jumpman logo on the mesh tongue. <br />The shoe sits atop a sail midsole and tan rubber outsole to round out the design.</p>
      <div className='row'>
            <div className='col-12 col-md-4 col-lg-4'>
      <img src={red}/>
           </div>
            <div className='col-12 col-md-4 col-lg-4'>
      <img src={redone}/>
           </div>
             <div className='col-12 col-md-4 col-lg-4'>
      <img src={redtwo}/>
      </div>
      <div style={{ textAlign:"center" }}>   
         <span className='original-price'>$1650.00</span>
                    <span className='discounted-price'>1120.00</span>
      <Link to="/product/page4"  style={{color:"darkred", textDecoration:"none", fontWeight:"bold", margin:"2vh"}}>ORDER NOW!!!!</Link>
      </div>
       </div>
      </div>
      
      
      
    </div>
  )
}

export default BestSeller
