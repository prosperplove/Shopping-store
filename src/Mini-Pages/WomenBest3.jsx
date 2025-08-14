import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';

const WomenBest3 = ({ slides, title, link, accordionItems }) => {
  return (
    <div style={styles.container}>
      <div>
        <h1>{title}</h1>
      </div>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        style={styles.swiper}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.img}
              alt={slide.alt}
              style={styles.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="container">
        <Link to={link.url} style={{ textDecoration:"none", color:"black" }}>
          <h2 style={{fontSize:"1.5rem"}}>{link.title}</h2>
          <p><span style={{fontWeight:"bolder"}}>Color</span>: {link.color}</p>
        </Link>
      </div>

      <div className="accordion accordion-flush" id={`accordionFlushExample${title.replace(/\s/g, '')}`}>
        {accordionItems.map((item, idx) => (
          <div className="accordion-item" key={idx}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-collapse${title.replace(/\s/g, '')}${idx}`}
                aria-expanded="false"
                aria-controls={`flush-collapse${title.replace(/\s/g, '')}${idx}`}
              >
                {item.header}
              </button>
            </h2>
            <div
              id={`flush-collapse${title.replace(/\s/g, '')}${idx}`}
              className="accordion-collapse collapse"
              data-bs-parent={`#accordionFlushExample${title.replace(/\s/g, '')}`}
            >
              <div className="accordion-body">{item.body}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    width: '100%',
    margin: '0 auto',
    padding: '1rem',
  },
  swiper: {
    borderRadius: '12px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '12px',
  },
};

export default WomenBest3;
