import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import cls from './Slider.module.css'

// import required modules
import { Autoplay } from 'swiper/modules';


const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide><img className={cls.item} src="https://i.pinimg.com/564x/79/7e/52/797e529c92437003117489ea1f2c31b9.jpg" alt={'reference'}/></SwiperSlide>
      <SwiperSlide><img className={cls.item} src="https://i.pinimg.com/564x/ab/8c/24/ab8c24a9d85faa638c19f83d332e0f85.jpg" alt={'reference'}/></SwiperSlide>
      <SwiperSlide><img className={cls.item} src="https://i.pinimg.com/564x/94/ab/db/94abdb1b99d1fde21a8fae15f1dba285.jpg" alt={'reference'}/></SwiperSlide>
      <SwiperSlide><img className={cls.item} src="https://i.pinimg.com/564x/c3/60/3c/c3603c16319c1750c660abb7ffb7d893.jpg" alt={'reference'}/></SwiperSlide>
      <SwiperSlide><img className={cls.item} src="https://i.pinimg.com/736x/24/86/11/248611e80c01a67cf7623f68d6c7e48a.jpg" alt={'reference'}/></SwiperSlide>
      <SwiperSlide><img className={cls.item} src="https://i.pinimg.com/564x/2a/de/19/2ade19d158bd0d4fa1ba54e6ff38255b.jpg" alt={'reference'}/></SwiperSlide>
    </Swiper>
  )
}

export default Slider