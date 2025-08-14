import { useContext, useEffect,useState } from 'react';
import { Link,} from 'react-router-dom'
import { CartContext } from '../Cart/CartContext';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import redthree from '../images/17.jpeg'
import redfour from '../images/18.jpeg'
import redfive from '../images/19.jpeg'
import best from '../images/20.jpeg'
import three from '../images/21.jpeg'
import man from '../images/22.jpeg'
import manone from '../images/23.jpeg'
import mantwo from '../images/24.jpeg'
import manthree from '../images/1.jpeg'
import manfour from '../images/5.jpeg'
import manfive from '../images/9.jpeg'
import mansix from '../images/pic.jpeg'
import manseven from '../images/pic6.jpeg'
import joy from '../images/pic10.jpeg'
import joyfive from '../images/26.jpeg'
import joysix from '../images/25.jpeg'
import joyseven from '../images/pic1.jpeg'
import BestSeller from '../Mini-Pages/BestSeller';
import  AOS  from 'aos';
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'

const Sneakers = () => {
  useEffect(()=>{

  AOS.init({duration:"3000"});

  },[])
   useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const { addToCart } = useContext(CartContext);

 
  const Sneakers = [
    // List your 15 items here
    { id: 1, name: "OG mart", price: 234, size: ["S", "M"], color: "red/black", image: joysix },
    { id: 2, name: "Nike P-400", price: 240, size: ["S", "M"], color: "blue/milk", image: man },
    { id: 3, name: "Nike Air Max 2", price: 330, size: ["S", "M"], color: "pink/white", image: manone },
    { id: 4, name: "Nike force 109", price: 490, size: ["S", "M"], color: "mixed", image: mantwo },
    { id: 5, name: "Nike Men's killshot", price: 321, size: ["S", "M"], color: "white", image: manthree },
    { id: 6, name: "Nike blazer", price: 176, size: ["S", "M"], color: "red/wite", image: manfour },
    { id: 7, name: "Nike Course Calm", price: 343, size: ["S", "M"], color: "mixed/white", image: manfive },
    { id: 8, name: "Nike Cortez", price: 123, size: ["S", "M"], color: "mixed/white", image: mansix },
    { id: 9, name: "Nike SB", price: 165, size: ["S", "M"], color: "mixed", image: manseven },
    { id: 10, name: "Nike Men's Initiator", price: 654, size: ["S", "M"], color: "white/black", image: three },
    { id: 11, name: "Nike SB", price: 124, size: ["S", "M"], color: "white/black", image: best },
    { id: 12, name: "Nike Max", price: 321, size: ["S", "M"], color: "red/yellow", image: joy },
    { id: 13, name: "Snoop Max", price: 240, size: ["S", "M"], color: "white", image: joyfive },
    { id: 14, name: "Nike Pac's Outlaw", price: 340, size: ["S", "M"], color: "red/black", image: redfour },
    { id: 15, name: "Nike Court Vision low", price: 273, size: ["S", "M"], color: "Colorful mixed", image: redfive },
    { id: 16, name: "Nike Dunk High Retro", price: 342, size: ["S", "M"], color: "milk/yellow/black", image: joyseven},
  ];

  const handleAddToCart = (product) => {
    const defaultSize = product.size.includes('M') ? 'M' : product.size[0];
    addToCart(product, defaultSize, 1);
    toast.dismiss();
    toast.success(`${product.name} Item added to cart`)
  };

  return (
    
    <div className="section-items" >
      
     
<div className="menSection">
     

</div>

   <div className='JoinUsNow'>
     <marquee behavior="" direction=""><p>WHY WAIT? TRY STORE PICKUP Buy online and find a store near you for pick up in less than 2 hours once you become a Member of Sneakers Cart <Link to="/JoinUs" style={{ textDecoration:"none",  color:"red"  }}>Join Now</Link>  MEMBERS: FREE SHIPPING ON ORDERS $50+ <Link to="/JoinUs" style={{ textDecoration:"none", color:"red" }}>Join Now</Link></p></marquee>
     </div>
      <div className="row g-3">
        {Sneakers.map((product) => (
          <div key={product.id} className="col-6 col-md-3 col-lg-3">
            <div className="Nike h-100" data-aos="fade-up" data-aos-duration="2000">
              <img src={product.image} alt={product.name} className="card-img-top" style={{ objectFit: 'cover', height: 'auto' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title" style={{ fontSize:'1rem' }}>{product.name}</h5>
               <p className="card-text mb-1">Price: <span style={{ color:"red" }}>${product.price}</span></p>
                <p className="card-text mb-1">Sizes: {product.size.join(', ')}</p>
                <p className="card-text mb-3">Color: <button className="btn btn-dark mt-auto" onClick={() => handleAddToCart(product)}
                 style={{  width:"100%", maxWidth:"130px"}}>
                  Add to Cart
                </button></p>
                {/* <div style={{display:"flex",padding:"1rem", justifyContent:"center"}}>
                <button className="btn btn-dark mt-auto" onClick={() => handleAddToCart(product)} style={{ 
                   width:"100%", maxWidth:"150px"
                 }}>
                  Add to Cart
                </button>
              </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <BestSeller/>
    </div>
  );
};

export default Sneakers;