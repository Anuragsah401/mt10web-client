"use client";

import React from "react";
import SectionTitle from "components/UI/SectionTitle";
import Container from "components/UI/Container";

import { FaQuoteLeft } from "react-icons/fa";
import { BsChatRightQuote } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

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
    <Container>
      <SectionTitle
        title="our clients"
        subTitle="What are Clients are saying about us"
      />

      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          // onSlideChange={}
          // onSwiper={(swiper) => console.log(swiper)}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 4000,
          }}
          loop={true}
        >
          {testomonialDetails.map((details, index) => {
            return (
              <SwiperSlide key={index}>
                <BsChatRightQuote />
                <p>{details.quotes}</p>

                <div>
                  <h3>{details.name}</h3>
                  <span>{details.position}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Container>
  );
};

export default Testomonial;
