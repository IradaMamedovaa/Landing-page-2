import React from 'react';
import './style.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import Card from './card';
import Spot1 from '../../assets/images/spot1.jpg'
import Spot2 from '../../assets/images/spot2.jpg'
import Spot3 from '../../assets/images/spot3.jpg'
import Spot4 from '../../assets/images/pick2.jpg'

const FeaturedSpots = () => {
  return (
    <div className='featuredSpots'>
      <aside>
        <h2>Featured <br /> Spots</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora,
          possimus?
        </p>
      </aside>
      <div className="cards">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          modules={[ Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><Card img={Spot2} title='Ollantaytambo' country='Peru'/></SwiperSlide>
          <SwiperSlide><Card img={Spot3} title='Antelope Canyon' country='USA'/></SwiperSlide>
          <SwiperSlide><Card img={Spot4} title='Lake Louise' country='Canada'/></SwiperSlide>
          <SwiperSlide><Card img={Spot1} title='Ollantaytambo' country='Peru'/></SwiperSlide>
          <SwiperSlide><Card img={Spot3} title='Antelope Canyon' country='USA'/></SwiperSlide>
          <SwiperSlide><Card img={Spot4} title='Lake Louise' country='Canada'/></SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default FeaturedSpots