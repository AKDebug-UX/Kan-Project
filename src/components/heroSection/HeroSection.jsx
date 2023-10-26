import React, { useContext, useEffect } from 'react'
import myContext from '../../context/data/myContext'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { Pagination, Autoplay } from "swiper";
import BackgroundSlider from "../common/BackgroundSlider";

function HeroSection() {
  const context = useContext(myContext)
  const { mode, product} = context

  return (
    <section id="home" className="relative">
      <div className="flex flex-col gap-y-3">
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={false}
          // modules={[Pagination, Autoplay]}
          className="mySwiper w-full md:h-[20em] h-[30em]"
        >
          {product.map((product) => {
            return (
              <SwiperSlide key={product.id}>
                <>
                  <div className="flex justify-center xl:gap-x-[60px] items-center">
                    <img src={product.imageUrl} alt="" className="bg-black/80" />
                  </div>
                  <div className="absolute inset-0 flex flex-col gap-y-3 p-4 items-start bg-black/40 justify-end z-10">
                    <h4 className="text-4xl uppercase font-bold text-white"> </h4>
                    <p>TO GIVE EVERY CHILD EQUAL OPPORTUNITY TO EXCEL AND ATTAIN GRATER HEIGHT IN HIS / HER CHOSEN CAREER</p>
                    <a href="#">
                      <button className="bg-blue-700 mt-8 px-4 py-3 rounded-full w-[118px]">Contact Me</button>
                    </a>
                  </div>
                </>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

    </section>
  )
}

export default HeroSection