import Link from "next/link";
import React from "react";
import { CiSettings } from "react-icons/ci";

const WhatWeDo = () => {
  const services = [
    {
      icon: <CiSettings />,
      title: "CCTV Installation",
      descriptions:
        "Direct enough off others say eldest may exeter she pain oni. Possible all ignorant supplied get settling marriage",
    },
    {
      icon: <CiSettings />,
      title: "CCTV Installation",
      descriptions:
        "Direct enough off others say eldest may exeter she pain oni. Possible all ignorant supplied get settling marriage",
    },
    {
      icon: <CiSettings />,
      title: "CCTV Installation",
      descriptions:
        "Direct enough off others say eldest may exeter she pain oni. Possible all ignorant supplied get settling marriage",
    },
    {
      icon: <CiSettings />,
      title: "CCTV Installation",
      descriptions:
        "Direct enough off others say eldest may exeter she pain oni. Possible all ignorant supplied get settling marriage",
    },
    {
      icon: <CiSettings />,
      title: "CCTV Installation",
      descriptions:
        "Direct enough off others say eldest may exeter she pain oni. Possible all ignorant supplied get settling marriage",
    },
  ];

  return (
    <div className="py-20 bg-[#F8F9FA] grid grid-cols-1 divide divide-[#ececec] md:grid-cols-2 lg:grid-cols-3   md:max-w-[900px] lg:max-w-[1400px] mx-auto">
      <div className="py-[3.125em] px-[2.5em] flex flex-col justify-center bg-[#D9E9E9] ">
        <span className="text-lg text-primary">WHAT WE DO</span>
        <h2 className="text-[1.75em] md:text-[2.625em] font-semibold">
          What Can We Offer Security
        </h2>
      </div>

      {services.map((service, i) => {
        return (
          <div
            key={i}
            className="py-[3.125em] px-[2.5em] flex flex-col gap-3 justify-center border "
          >
            <div className="text-[5em] ">{service.icon}</div>
            <span className="text-2xl font-semibold">
              <Link href="" className="hover:text-redish">
                {service.title}
              </Link>
            </span>
            <p>{service.descriptions}</p>
          </div>
        );
      })}
    </div>
  );
};

export default WhatWeDo;
