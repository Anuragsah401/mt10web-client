import React from "react";
import BreadCrum from "./BreadCrum";

import Image from "next/image";

import cctvImg from "../../../public/image/cctv.jpg";



const PagesHeadSection = ({ title, crumLinks }) => {
  return (
    <div className="py-32 relative overflow-hidden text-white">
      <h1 className="capitalize text-center text-4xl md:text-6xl mb-5 font-bold text-gray-900">
        {title}
      </h1>
      <BreadCrum crumLinks={crumLinks} />

      <Image
        src={cctvImg}
        alt="cctv"
        className="absolute brightness-75 h-full w-full object-cover top-0 bottom-0 -z-[1]"
      />
    </div>
  );
};

export default PagesHeadSection;
