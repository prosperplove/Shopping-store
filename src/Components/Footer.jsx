import React from 'react'
import { Link } from 'react-router-dom'
import { FaTwitter } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa6'
const Footer = () => {
  return (
    <div>
      <footer className='footer'>
    
      <div class="container-fluid pt-5">
      
      <div class="col-lg-10 m-auto">
        <div class="row pb-4">
      <div class="col-lg-3">
        <h3>DA STELLA'S</h3>
        <p><h2 style={{fontSize:"1.5rem"}}>Buy fast. Wear faster. <br></br><span style={{ fontFamily:"cursive" }}>with DA STELLA'S</span></h2></p>
      </div>
      <div class="col-lg-3">
        <a href="https://facebook.com" style={{  color:"black"}}><FaFacebook size={30}/></a>
           <a href="https://ng.linkedin.com" style={{ padding:"1rem",color:"black"}}> <FaLinkedin size={30}/></a>
            <a href="https://x.com" style={{ color:"black"}}><FaTwitter size={30}/></a>
      </div>
      <div class="col-lg-3">
       <Link to="/ContactUs" style={{padding:"0.5rem" ,textDecoration:"none", fontSize:"1rem"}}className='footer-contact'>Contact</Link>
        <Link to="/Policy" style={{textDecoration:"none",fontSize:"1rem"}}className='footer-contact'>Terms of use</Link>
      </div>
      <div class="col-lg-3">
       <p><span class="btn btn-primary"> Da Stella's</span> &copy; copyright 02021 All right reserved|</p>
      </div>
      </div>
      <hr />
     
      </div>
     </div>
      </footer>
    </div>
  )
}

export default Footer
