"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

const Slider = () => {
  const sliderData = [
    {
      title: "welcome to mount10 technologies",
      description: "Keep safe and happy your mind",
      img: "https://cdn.pixabay.com/photo/2017/06/18/23/10/cctv-2417559_1280.jpg",
    },
    {
      title: "welcome to mount10 technologies",
      description: "Keep safe and happy your mind",
      img: "https://img.freepik.com/free-photo/man-carrying-tester-mouth-while-repairing-ceiling-focus-light-home_23-2148087621.jpg?w=996&t=st=1685950966~exp=1685951566~hmac=63cacd679b081bb5fa44f80e79b0b0d2ad104284880b85d447c1a77cd280f9e1",
    },
  ];

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      // onSlideChange={}
      // onSwiper={(swiper) => console.log(swiper)}
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{
        delay: 2000,
      }}
      loop={true}
    >
      {sliderData.map((slider, i) => {
        return (
          <SwiperSlide key={`slide-${i}`}>
            <div className="flex h-[500px] relative lg:static">
              <div className="lg:w-[50%] w-full h-full text-white lg:text-[black] bg-[#0000005e] lg:bg-white flex flex-col justify-center px-[2rem] lg:px-0 lg:pl-[2rem] absolute lg:static">
                <h3 className="uppercase text-[0.875em] md:text-[1.2em] mb-1 lg:text-primary">
                  {slider.title}
                </h3>
                <h1 className="text-[2.188em] md:text-[3em] font-semibold">
                  {slider.description}
                </h1>
              </div>

              <div className="lg:w-[50%] flex-1 lg:flex-0 h-full">
                <img
                  src={slider.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
