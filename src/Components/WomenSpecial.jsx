import { useContext, useEffect, useState} from 'react';
import { Link,} from 'react-router-dom'
import { CartContext } from '../Cart/CartContext';
import LadiesDress from '../Mini-Pages/LadiesDress'
import dress4 from "../images/27.jpg"
import girl from "../images/28.jpg"
import girl3 from "../images/29.jpg"
import dress5 from "../images/30.jpg"
import dress6 from "../images/31.jpg"
import dress11 from "../images/32.jpg"
import dress7 from "../images/33.jpg"
import dress8 from "../images/34.jpg"
import dress9 from "../images/dress11.jpg"
import dress10 from "../images/35.jpg"
import  AOS  from 'aos';
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Membership from '../Mini-Pages/Membership';
import WomenBest from '../Mini-Pages/WomenBest';

const WomenSpecial = () => {
  useEffect(()=>{

  AOS.init({duration:"3000"});

  },[])
    useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  //  useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // }, []);

     const WomenSpecial = [
       // List your 15 items here
       { id: 1, name: "V Allover", price: 139, oldPrice:200, size: ["S", "M"],  image: dress4},
       { id: 2, name: "Virtus Shoulder Bag", price: 240, oldPrice:320, size: ["S", "M"],  image: dress5 },
       { id: 3, name: "Black makaveli heels", price: 1530, oldPrice:1910, size: ["S", "M"],  image: dress6 },
        { id: 9, name: "Versace Mini Bag", price: 1265, oldPrice:1608, size: ["S", "M"], image: dress11 },
       { id: 4, name: "La Medusa 55", price: 1290, oldPrice:1582, size: ["S", "M"],   image: girl },
       { id: 5, name: "La Leather Sling", price: 1290, oldPrice:1582, size: ["S", "M"], image: girl3 },
       { id: 6, name: "Two set black cowon", price: 895, oldPrice:1135, size: ["S", "M"], image: dress9 },
       { id: 7, name: "Netted Shirt", price: 185, oldPrice:232, size: ["S", "M"],  image: dress10 },
      //  { id: 8, name: "Light blue Paris hand bag", price: 123, oldPrice:250, size: ["S", "M"],image: dress12 },
      //  { id: 9, name: "Red makaveli heels", price: 165, oldPrice:208, size: ["S", "M"], image: dress13 },
      
     ];
      const handleAddToCart = (product) => {
    const defaultSize = product.size.includes('M') ? 'M' : product.size[0];
    addToCart(product, defaultSize, 1);
      toast.dismiss();
    toast.success(`${product.name} Item added to cart`)
  };

  return (
    <div className='section-items' style={{}}>
       
      <div className='section-women'>
        <div>
        <h1>TOO EASY</h1> 
        <p>Shop luxury, Shop class</p>
        </div>
      </div>
      <div className='JoinUsNow'>
     <marquee behavior="" direction=""><p>WHY WAIT? TRY STORE PICKUP Buy online and find a store near you for pick up in less than 2 hours once you become a Member of Sneakers Cart <Link to="/JoinUs" style={{ textDecoration:"none",  color:"red"  }}>Join Now</Link>  MEMBERS: FREE SHIPPING ON ORDERS $50+ <Link to="/JoinUs" style={{ textDecoration:"none", color:"red" }}>Join Now</Link></p></marquee>
     </div>
      <div className="container" style={{ textAlign:"center", fontFamily:"cursive" }}>
        <p style={{ fontSize:"0.8rem" }}>Women</p>
        <h1 style={{ fontSize:"1.3rem" }}>Trending Now: Bestseller of the week</h1>
       </div>
         <div className="container">
          <img src="" alt="" />
         </div>
       <LadiesDress/>
       <div className="container" style={{ textAlign:"center", fontFamily:"cursive" }}>
        <p style={{ fontSize:"0.8rem" }}>Women</p>
        <h1 style={{ fontSize:"1.3rem" }}>Trending Now: Women's Special</h1>
       </div>
     <div className="container">
      <div className="row g-3">
        {WomenSpecial.map((product) => (
          <div key={product.id} className="col-6 col-md-3 col-lg-3" data-aos="fade-up" data-aos-duration="2000">
            <div className="Nike h-100">
              <img src={product.image} alt={product.name} className="card-img-top"/>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title" style={{ fontSize:"1rem" }}>{product.name}</h5>
                 <span className='original-price'>{product.oldPrice}</span>
                <p className="card-text mb-1">Price: <span style={{ color:"red" }}>${product.price}</span></p>
                <button className="btn btn-dark" onClick={() => handleAddToCart(product)} style={{ 
                   width:"40vh", maxWidth:"150px",fontSize:"0.8rem"
                 }}>
                  Add to Cart
                </button>
                {/* <p className="card-text mb-3">Color: {product.color}</p> */}
                {/* <div style={{display:"flex",padding:"1rem", justifyContent:"center"}}>
                <button className="btn btn-dark" onClick={() => handleAddToCart(product)} style={{ 
                   width:"40vh", maxWidth:"150px",fontSize:"0.8rem"
                 }}>
                  Add to Cart
                </button>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
     
</div>
   <WomenBest/>
<Membership/>

    </div>
  )
}

export default WomenSpecial
