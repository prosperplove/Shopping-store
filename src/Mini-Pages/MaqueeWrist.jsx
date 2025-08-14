import React from 'react'
import watch24 from "../images/watch24.jpg"
import watch25 from "../images/watch25.jpg"
import watch27 from "../images/watch27.jpg"
import watch28 from "../images/watch28.jpg"
import watch29 from "../images/watch29.jpg"
import { Swiper,SwiperSlide } from 'swiper/react';
import { Pagination,Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const WristWatch = () => {

  return (
    <div>
      
      <div style={{ textAlign:"center", margin:"10px" }}>
        <h1 style={{ fontSize:"1.3rem", fontStyle:"italic", fontWeight:"400"}}>Upcoming products</h1>
        <p>Release date <span style={{ color:"skyblue", fontWeight:"bolder" }}>January 2026</span></p>
      </div>
          <div id="swiper-container-wrapper">
              <Swiper
                           
          modules={[Pagination,Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable:true }}
          autoplay={{ delay:3000 }}
          loop>
            <SwiperSlide>
              <img src={watch24} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={watch25} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={watch27} alt="" />
            </SwiperSlide>
              <SwiperSlide>
              <img src={watch28} alt="" />
            </SwiperSlide>
              <SwiperSlide>
              <img src={watch29} alt="" />
            </SwiperSlide>
          </Swiper>
          </div>
        
    </div>
  )
}

export default WristWatch
