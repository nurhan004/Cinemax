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
        <div className='block3-text'>
          <h1>Смотрите фильмы, которые вам нравятся</h1>
          <p>На нашем сайте собрано огромное количество фильмов и сериалов на любой вкус</p>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          modules={[Pagination]}
          className=""
        >
          <div className='slides'>
          <SwiperSlide className="Slide">
            <Link to="/drama">
              <h1>Драма</h1>
              <p>120k+ фильмов</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="Slide">
            <Link to="/horror">
            <h1>Ужасы</h1>
            <p>100k+ фильмов</p>
            
            </Link>
          </SwiperSlide>
          <SwiperSlide className="Slide">
            <Link to="/komediya">
            <h1>Комедия</h1>
            <p>90k+ фильмов</p>
            
            </Link>
          </SwiperSlide>
          <SwiperSlide className="Slide">
            <h1>Мультфильм</h1>
            <p>90k+ фильмов</p>
          </SwiperSlide>
          <SwiperSlide className="Slide">Slide 5</SwiperSlide>
          <SwiperSlide className="Slide">Slide 6</SwiperSlide>

          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Block3;
