import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import watch23 from "../images/watch23.jpg"
import watch2 from "../images/watch2.jpg"
import watch10 from "../images/watch10.jpeg"
import watch13 from "../images/watch13.jpeg"
import watch5 from "../images/watch5.jpg"
import watch3 from "../images/watch3.jpg"
import watch14 from "../images/watch14.jpg"
import watch17 from "../images/watch17.jpg"
import watch20 from "../images/watch20.jpg"
import watch21 from "../images/watch21.jpg"
import MaqueeWrist from "../Mini-Pages/MaqueeWrist"
import  AOS  from 'aos';
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
const WristWatch = () => {
 useEffect(()=>{

  AOS.init({duration:"3000"});

  },[])
   useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div style={{marginTop:"15vh"}} >
    
        <div className="container mt-5 py-5" id='wrist'>
           <div className="row">
            <div className="col-12 col-md-6 col-lg-6" id='wrist-info'>
               <h1>Explore luxurious <span style={{backgroundColor:"skyblue", borderRadius:"5px", display:"inline-block",padding:'2px 6px', color:"white", fontFamily:"cursive"}}>watches</span></h1>
                <p>Time is money, make your time worth every penny <br />Act like the Boss, wear with respect</p>
            </div>
             <div className="col-12 col-md-6 col-lg-6">
            <img src={watch10} alt="" />
            <h2 style={{ fontSize:"1.5rem" }}>ONE CLICK JOYFUL STEEL SKY BLUE</h2>
           <Link to="/product/page11" > <button className='btn btn-outline-dark'>Buy now</button></Link>
            
          </div>
 
           </div>
        </div>
        <div className="head-watch">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <img src={watch23} alt="" />
            </div>
            
             <div className="col-12 col-md-6 col-lg-6">
              <div className='circle rounded-circle'>
              <img src={watch2} alt="" />
              <p>"A great watch is more than just a timepiece; it's a reflection of ones's personality." <br />"Watches connects us to the past, remind us of the present, and inspire us for the future."</p>
              </div>
            </div>
          </div>
        
        </div>
<div style={{width:"100%" }} id='best-watch'>
               <h1>Explore your world</h1>
       <div className='row'>
                
        <div className="col-6 col-md-6 col-lg-3">
          <p>New</p>
           <img src={watch14} alt="" />
           <Link to="/product/page15" style={{ textDecoration:"none", color:"black" }}>
            <h1>Rotary Regent GBO</h1>
            <span className='original-price'>$1200.00</span>
              <span className='discounted-price'>$845.00</span>
           </Link>
        
          </div>
            
          <div className="col-6 col-md-6 col-lg-3">
            <p>New</p>
             <img src={watch17} alt="" />
              <Link to="/product/page13" style={{ textDecoration:"none", color:"black" }}>
              <h1>Citizen NH8354-58</h1>
          <span className='original-price'>$1132.00</span>
          <span className='discounted-price'>$723.00</span>
         </Link>
          </div>
        <div className="col-6 col-md-6 col-lg-3">
          <p>New</p>
          <img src={watch20} alt="" />
           <Link to="/product/page12" style={{ textDecoration:"none", color:"black" }}>
           <h1>Casio AQ S820W 5A</h1>
             <span className='original-price'>$2500.00</span>
          <span className='discounted-price'>$1850.00</span>
           </Link>
          </div>
            
          <div className="col-6 col-md-6 col-lg-3">
            <p>New</p>
             <img src={watch21} alt="" />
              <Link to="/product/page14" style={{ textDecoration:"none", color:"black" }}>
             <h1>Citizen BN0220-16</h1>
             <span className='original-price'>$1760.00</span>
            <span className='discounted-price'>$1350.00</span>
            </Link>
          </div>
        </div>
</div>  

   <MaqueeWrist/>

      
      
    </div>
  )
}

export default WristWatch
