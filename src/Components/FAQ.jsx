import React from 'react'
import { Link } from 'react-router-dom'
import {FaTruck,FaBagShopping,FaReceipt} from 'react-icons/fa6'
const FAQ = () => {
  return (
    <div>
       <div className='container' id='benefits'>
           <h2 style={{ textAlign:"center", fontSize:"1.8rem"}}>Membership Benefits</h2>
           <div className='row'>
            <div className='col-12 col-md-4 col-lg-4'>
            <FaTruck size={50}/>
           <h2>Free Shipping</h2>
           <p>Members score free delivery on every $50+ order.</p>
          </div>

         <div className='col-12 col-md-4 col-lg-4'>
           <FaBagShopping size={50}/>
           <h2>Wear Test</h2>
           <p>Not sure? Try it for 60 days—return if it’s not a fit.</p>
          </div>

       <div className='col-12 col-md-4 col-lg-4'>
           <FaReceipt size={50}/>
           <h2>Receiptless Returns</h2>
           <p>Return or exchange receipt-free in-store or in the Nike App.</p>
          </div>
</div>
</div>
<div className='container' id='faq'>
<h3 style={{ fontSize:"1.5rem" }}>Frequently Asked Questions</h3>
<div class="accordion py-5" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      What is DA STELLA's Membership?
  </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
      <div class="accordion-body">
     <strong>DA STELLA'S </strong>membership is access to the very best of luxurious wears through any of our apps, exclusive products, and Member-only experiences.  <strong>DA STELLA'S </strong>Members also enjoy free shipping on orders of $500 or more, 30-days wear Test, and receipt-less returns. It’s free and easy to join
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      How to become a DA STELLA'S member?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
      <div class="accordion-body">
      Easy!! Create an account here <Link to="/JoinUs" style={{ textDecoration:"none", color:"red" }}>Join Now</Link>.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      Is Membership free?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
      <div class="accordion-body">
      100% yes. Members enjoy all the benefits of Nike Membership at no cost, because once you’re in, we got you. Zero money gets you access to all of it.
      </div>
    </div>
  </div>
</div>
</div>
    </div>
  )
}

export default FAQ
