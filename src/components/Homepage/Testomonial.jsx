"use client";

import React from "react";
import SectionTitle from "components/UI/SectionTitle";
import Container from "components/UI/Container";

import { FaQuoteLeft } from "react-icons/fa";
import { BsChatRightQuote } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import backImage from "../../../public/image/patternpad.png";

const Testomonial = () => {
  const testomonialDetails = [
    {
      quotes:
        "Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley.",
      name: "John doe",
      position: "ceo of company",
    },
    {
      quotes:
        "Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley.",
      name: "John doe",
      position: "ceo of company",
    },
    {
      quotes:
        "Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley.",
      name: "John doe",
      position: "ceo of company",
    },
  ];

  return (
    <div className="py-20 relative overflow-hidden bg-[#0000000e]">
      <Image src={backImage} alt="" className="w-full h-full top-0 opacity-50 bottom-0 absolute object-cover -z-10"/>

      <Container>
        <SectionTitle
          title="our clients"
          subTitle="What our Clients are saying about us"
        />

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          // onSlideChange={}
          // onSwiper={(swiper) => console.log(swiper)}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 4000,
          }}
          loop={true}
          breakpoints={{
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {testomonialDetails.map((details, index) => {
            return (
              <SwiperSlide key={index}>
                <div className=" ">
                  <BsChatRightQuote size={"3em"} />
                  <p className="md:text-[1.5em] my-5">{details.quotes}</p>

                  <div>
                    <h3 className="font-semibold uppercase">{details.name}</h3>
                    <span className="uppercase">{details.position}</span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </div>
  );
};

export default Testomonial;
