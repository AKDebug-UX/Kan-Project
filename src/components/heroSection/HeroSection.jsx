import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { Pagination, Autoplay } from "swiper";
import BackgroundSlider from "../common/BackgroundSlider";

function HeroSection() {
  const images = [
    {
      id: 1,
      img: "https://www.filmhouseng.com/_next/image?url=https%3A%2F%2Ffh-storage.nyc3.digitaloceanspaces.com%2Fe7ef1965a7a19903937f70047d2a6e79.jpeg&w=1920&q=60",
    },
    {
      id: 2,
      img: "https://reach-cinema-storage.nyc3.digitaloceanspaces.com/Picture5.jpgc9411b75-36b1-4826-bda5-00bca3dfbd4d",
    },
    {
      id: 3,
      img: "https://www.filmhouseng.com/_next/image?url=https%3A%2F%2Ffh-storage.nyc3.digitaloceanspaces.com%2F228ce56bfb3f22f90d3dadb14b047642.jpeg&w=1920&q=60",
    },
  ];

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
          {images.map((image) => {
            return (
              <SwiperSlide key={image.id}>
                <>
                  <div className="flex justify-center xl:gap-x-[60px] items-center">
                    <img src={image.img} alt="" className="bg-black/80" />
                  </div>
                  <div className="absolute inset-0 flex flex-col gap-y-3 items-center bg-black/40 justify-center z-10">
                    <h4 className="text-4xl uppercase font-bold text-white">
                      <h4 className="text-4xl uppercase font-bold">
                        Mare<span className="text-blue-700">gdave </span>
                        B<span className="text-blue-700">est </span>
                        <span className="text-blue-700">Leg</span>acy School
                      </h4>
                    </h4>
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