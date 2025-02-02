import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Block3.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

function Block3() {
  return (
    <div className="block3-container">
      <div className="swiper1">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          modules={[Pagination]}
          className=""
        >
          <SwiperSlide className="Slide">
            {/* <Link to="/drama"> */}
              <h1>Драма</h1>
              <p>120k+ фильмов</p>
            {/* </Link> */}
          </SwiperSlide>
          <SwiperSlide className="Slide">
            <h1>Ужасы</h1>
            <p>100k+ фильмов</p>
          </SwiperSlide>
          <SwiperSlide className="Slide">
            <h1>Детективы</h1>
            <p>90k+ фильмов</p>
          </SwiperSlide>
          <SwiperSlide className="Slide">
            <h1>Мультфильм</h1>
            <p>90k+ фильмов</p>
          </SwiperSlide>
          <SwiperSlide className="Slide">Slide 5</SwiperSlide>
          <SwiperSlide className="Slide">Slide 6</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Block3;
