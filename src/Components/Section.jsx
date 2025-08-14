import React,{useEffect} from "react";
import Woman from "../Mini-Pages/Woman";
import Woman2 from "../Mini-Pages/Woman2";
import Woman3 from "../Mini-Pages/Woman3";
import Woman4 from "../Mini-Pages/Woman4";
import Woman5 from "../Mini-Pages/Woman5";
import Woman6 from "../Mini-Pages/Woman6";
import { Link } from "react-router-dom";
import sub from "../images/shoe.jpg";
import dress7 from "../images/dress7.jpg";
import dress8 from "../images/dress8.jpg";
import o from "../images/o.jpg";
import manthree from "../images/manthree.jpg";
import mantwo from "../images/mantwo.jpg";
import cap from "../images/women.jpg";
import watch from "../images/wrict.jpg";
import men from "../images/men.jpg";
import men2 from "../images/men2.jpg";
import men3 from "../images/men3.jpg";
import men4 from "../images/men4.jpg";
import  AOS  from 'aos';
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import Membership from "../Mini-Pages/Membership";
import FAQ from "./FAQ";
import { Swiper,SwiperSlide } from 'swiper/react';
import { Pagination,Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Section = () => {
    useEffect(()=>{

  AOS.init({duration:"3000"});

  },[])
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
  
  return (
    <div className="Main-Section">
      <div className="section-1">
        <div>
          <p>SUMMER 2026</p>
          <h1>NEW SNEAKERS</h1>
          <Link to="/Sneakers" style={{ textDecoration: "none" }}>
            <button type="button" class="btn btn-dark">
              Shop Now
            </button>
          </Link>
        </div>
      </div>

      <div className="section-2">
        <h2>Shop The Classic</h2>
      </div>
      <div className="section-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-4 py-2">
              <img src={sub} alt="" />
              <div className="section3-sub">
                <h2>Sneakers</h2>
                <Link to="/Sneakers" href="#">
                  
                  <button type="button" class="btn btn-outline-dark">
                    SHOP NOW
                  </button>
                </Link>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-4 py-2">
              <img src={cap} alt="" />
              <div className="section3-sub">
                <h2>Women specials</h2>
                <Link to="/WomenSpecial" href="#">
                 
                  <button type="button" class="btn btn-outline-dark">
                    SHOP NOW
                  </button>
                </Link>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-4 py-2">
              <img src={watch} alt="" />
              <div className="section3-sub">
                <h2>Luxury wrist watches</h2>
                <Link to="/WristWatch" href="#">
                 
                  <button type="button" class="btn btn-outline-dark">
                    SHOP NOW
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-4 py-4" id="swiper-container-wrapper">
        <p style={{ textAlign: "center" }}>Most trending...</p>
          <Swiper
               
                modules={[Pagination,Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable:true }}
                autoplay={{ delay:3000 }}
                loop>
                  <SwiperSlide>
                    <img src={men} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={men2} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={men3} alt="" />
                  </SwiperSlide>
                   <SwiperSlide>
                    <img src={men4} alt="" />
                  </SwiperSlide>
                </Swiper>
             </div>
         <div className="container" style={{ textAlign:"center" }}>
          <Link to="/product/page16" style={{ textDecoration:"none",color:'black' }}><h1 style={{ fontSize:"1.5rem", fontWeight:"bolder" }}>Melange Wool Formal Pants</h1>
          <p><span style={{ fontWeight:"bolder" }}>Color:</span> Brown</p></Link>
              <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item" id="menDetails">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
       <h1>DETAILS</h1>
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">This wool mélange double-breasted blazer features a peaked lapel and accent Medusa buttons. The sartorial style is detailed with a jacquard Versace tailoring label at the sleeve. It's fully lined featuring the Wild Cats print, a reinterpretation of an archival print of the animal kingdom with zebra and leopard patterns.
      <ul>
        <li>Medusa hardware</li>
        <li>Wild Cats print lining</li>
        <li>Versace tailoring label</li>
        <li>Long sleeves</li>
        <li>Peaked lapel</li>
        <li>Chest welt pocket</li>
      </ul>
    </div>
    </div>
  </div>
  <div class="accordion-item"  id="menDetails">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
       <h1>CARE</h1>
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">For cleaning and care instructions, we advise you to carefully read the product label present inside the garment. For any questions or concerns, please visit our Care Guide page or entrust its care to a specialist cleaning service.</div>
    </div>
  </div>
  <div class="accordion-item"  id="menDetails">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      <h1>SIZE</h1>
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">The model is 1.87 m tall and wears size 48 IT</div>
    </div>
      <div class="accordion-item"  id="menDetails">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      <h1>PACKAGING</h1>
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Your Versace items will be beautifully wrapped using Barocco tissue paper and a matte black box, perfect for gifting.*
        As part of our commitment to responsible sourcing, all paper-based packaging components are from Forest Stewardship Council (FSC) Certified sources. Read more here.
         *Please note some items may be shipped in a different packaging from your chosen one..</div>
    </div>
  </div>
  </div>
</div>
         </div>
           
      <div className="section-5 py-5 text-center">
        <p>Hot market of the week</p>
        <h2 className="product">New Arrivals</h2>
      </div>

      <div className="container" id="content">
        <div className="row" data-aos="fade-up" data-aos-duration="2000">
          <div className="col-6 col-md-4 col-lg-4">
            <div className="car">
              <Woman />
              <div className="newMarket">
                <h1>Bestseller</h1>
                <Link
                  to="/product/page3"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <h2>The Nike Air Mag</h2>
                  <p>white and milk color with upper jumpman logo on mesh</p>
                </Link>
                <p>$970</p>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-4">
            <div className="car">
              <Woman2 />
              <div className="newMarket">
                <h1>Bestseller</h1>
                <Link
                  to="/product/page4"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <h2>Nike SB</h2>
                  <p>orange and whitke fitted SB,2025 edition</p>
                </Link>
                <p>$1,120</p>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-4">
            <div className="car">
              <Woman3 />
              <div className="newMarket">
                <h1>Bestseller</h1>
                <Link
                  to="/product/page5"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <h2>Nike Men's killshot</h2>
                  <p>Killshot nailfit Nike,with soft comfort. football boot inspired</p>
                </Link>
                <p>$2,500</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-4">
            <div className="car">
              <Woman4 />
              <div className="newMarket">
                <h1>Bestseller</h1>
                <Link
                  to="/product/page6"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <h2>Nike Pac's Outlaw</h2>
                  <p>Classic Luxury and perfection wool skin Nike, Designed by Tupac's 1995 Nike edition </p>
                </Link>
                <p>$1500</p>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-4">
            <div className="car">
              <Woman5 />
              <div className="newMarket">
                <h1>Bestseller</h1>
                <Link
                  to="/product/page7"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <h2>Nike force 109</h2>
                  <p>White Goretex Sport crazed model edition</p>
                </Link>
                <p>$850</p>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-4">
            <div className="car">
              <Woman6 />
              <div className="newMarket">
                <h1>Bestseller</h1>
                <Link
                  to="/product/page8"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <h2>Men's Nike Miler</h2>
                  <p>Men's Repel Running Jacket</p>
                </Link>
                <p>$1,050</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="section-4 py-4" id="swiper-container-wrapper">
        <p style={{ textAlign: "center" }}>Upcoming products...</p>
          <Swiper
               
                modules={[Pagination,Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable:true }}
                autoplay={{ delay:3000 }}
                loop>
                  <SwiperSlide>
                    <img src={dress7} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={dress8} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={o} alt="" />
                  </SwiperSlide>
                   <SwiperSlide>
                    <img src={manthree} alt="" />
                  </SwiperSlide>
                   <SwiperSlide>
                    <img src={mantwo} alt="" />
                  </SwiperSlide>
                </Swiper>
                <p style={{ textAlign:"center", fontWeight:"600" }}>Available june 2026</p>
             </div>
      <Membership />
      <FAQ/>
    </div>
  );
};

export default Section;
