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
  const { mode, product } = context

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
          className="mySwiper w-full md:h-[25em] h-[30em]"
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
                    <h1 className="text-white text-3xl title-font font-medium mb-1">
                      {product.title}
                    </h1>
                    <div className="mb-2 text-white flex items-center justify-start gap-9 w-full">
                      <div className="flex-col justify-center items-center">
                        <p className="font-bold text-[12px]">Category</p>
                        <p className="text-[10px] sm:text-[10px]">{product.category}</p>
                      </div>
                      <div className="flex-col justify-center items-center">
                        <p className="font-bold text-[12px]">Date</p>
                        <p className="text-[10px]">{product.date}</p>
                      </div>
                      <div className="flex-col justify-center items-center">
                        <p className="font-bold text-[12px]">Showtime</p>
                        <p className="text-[10px]">{product.time}</p>
                      </div>
                    </div>

                    <p className="leading-relaxed text-white md:w-[60%]">
                      {product.description}
                    </p>
                      <button onClick={() => window.location.href = `/ticketsinfo/${product.id}`} className="bg-blue-700 mt-5 px-4 py-2.5 text-white rounded-full w-[118px]">Buy Tickets</button>
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