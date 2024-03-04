import React from "react";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";

import SectionTitle from "components/UI/SectionTitle";
import Container from "components/UI/Container";
import map from "assets/map2.png";

const WorkArea = () => {
    const mapList = [
        {
            icon: <FaMapMarkerAlt />,
        },
        {},
    ]
  return (
    <div className="py-28 text-center">
      <Container>
        <SectionTitle title="work area" subTitle="We Work Around the Country" />

        <Image
          src={map}
          alt="map"
          className="relative z-[2] -rotate-12 w-full h-full lg:w-[80%] mx-auto -mt-12 lg:-mt-24 object-cover grayscale"
        />
        <FaMapMarkerAlt className="absolute left-1/2 top-2/3 transform -translate-x-1/2 -translate-y-1/2 text-primary text-4xl"/>
      </Container>
    </div>
  );
};

export default WorkArea;
