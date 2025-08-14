import React from 'react'
import nikee from "../images/nikee.jpg";
import { Link } from "react-router-dom";
const Membership = () => {
  return (
    <div style={{ padding:"1vh" }}>

         <div className="container" style={{ backgroundColor:"black", color:"white" }}>
       <div className="row">
            <div className="col-12 col-md-6 col-lg-6 py-4">
              <p
                style={{
                  fontSize: "1.2rem",
                  fontFamily: "cursive",
                }}
              >
                DA STELLA'S MEMBERSHIP
              </p>
              <h2 style={{ fontSize:'1.5rem' }}>
                BECOME A MEMBER
              </h2>
              <p>Sign up for free. Exclusive discounts</p>
             <div style={{ gap:"0.5rem", display:"flex", flexWrap:"wrap"}}>
              <Link to="/JoinUs">
                <button className='btn bg-white'>Join Us</button>
              </Link>
              <Link to="/SignIn">
                <button className='btn bg-white'>Sign In</button>
              </Link>
              </div>
            </div>
              <div className="col-12 col-md-6 col-lg-6">
              <img src={nikee} style={{ width: "100%"}} />
            </div>
          </div>
        
      </div>

    </div>
  )
}

export default Membership