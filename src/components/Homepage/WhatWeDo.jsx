import Link from "next/link";
import React from "react";
import { CiSettings } from "react-icons/ci";
import Container from "components/UI/Container";

const WhatWeDo = () => {
  const services = [
    {
      icon: <CiSettings />,
      title: "CCTV Installation",
      descriptions:
        "Direct enough off others say eldest may exeter she pain oni. Possible all ignorant supplied get settling marriage",
      backgroundImg:
        "https://t4.ftcdn.net/jpg/03/10/59/85/360_F_310598572_aLBURiW3k45bxmogp5FxoMtYVszpL6Vm.jpg",
    },
    {
      icon: <CiSettings />,
      title: "CCTV Installation",
      descriptions:
        "Direct enough off others say eldest may exeter she pain oni. Possible all ignorant supplied get settling marriage",
      backgroundImg:
        "https://t4.ftcdn.net/jpg/03/10/59/85/360_F_310598572_aLBURiW3k45bxmogp5FxoMtYVszpL6Vm.jpg",
    },
    {
      icon: <CiSettings />,
      title: "CCTV Installation",
      descriptions:
        "Direct enough off others say eldest may exeter she pain oni. Possible all ignorant supplied get settling marriage",
      backgroundImg:
        "https://t4.ftcdn.net/jpg/03/10/59/85/360_F_310598572_aLBURiW3k45bxmogp5FxoMtYVszpL6Vm.jpg",
    },
    {
      icon: <CiSettings />,
      title: "CCTV Installation",
      descriptions:
        "Direct enough off others say eldest may exeter she pain oni. Possible all ignorant supplied get settling marriage",
      backgroundImg:
        "https://t4.ftcdn.net/jpg/03/10/59/85/360_F_310598572_aLBURiW3k45bxmogp5FxoMtYVszpL6Vm.jpg",
    },
    {
      icon: <CiSettings />,
      title: "CCTV Installation",
      descriptions:
        "Direct enough off others say eldest may exeter she pain oni. Possible all ignorant supplied get settling marriage",
      backgroundImg:
        "https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg",
    },
  ];

  return (
    <Container>
      <div className="py-20 bg-[#F8F9FA] grid grid-cols-1 divide divide-[#ececec] md:grid-cols-2 lg:grid-cols-3 ">
        <div className="py-[3.125em] px-[2.5em] flex flex-col justify-center bg-[#D9E9E9] ">
          <span className="text-lg text-primary">WHAT WE DO</span>
          <h2 className="text-[1.75em] md:text-[2.625em] font-semibold">
            What Can We Offer Security
          </h2>
        </div>

        {services.map((service, i) => {
          return (
            <Link
              href=""
              key={i}
              className="py-[3.125em] px-[2.5em] flex flex-col gap-3 justify-center border hover:shadow-xl relative hover:bg-light-dark hover:text-white group transition-all duration-500 ease-in-out"
            >
              <img
                src={service.backgroundImg}
                alt=""
                className="absolute top-0 bottom-0 left-0 right-0 opacity-0 w-full h-full group-hover:opacity-25 transition-all duration-500 ease-in-out"
              />
              <div className="text-[5em] ">{service.icon}</div>

              <span className="text-2xl font-semibold ">{service.title}</span>
              <p>{service.descriptions}</p>
            </Link>
          );
        })}
      </div>
    </Container>
  );
};

export default WhatWeDo;
