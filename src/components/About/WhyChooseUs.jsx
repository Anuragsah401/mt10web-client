import React from "react";

import { BiCctv } from "react-icons/bi";
import { CiServer } from "react-icons/ci";
import { FaUsers } from "react-icons/fa6";
import { GrUserWorker } from "react-icons/gr";
import SectionTitle from "components/UI/SectionTitle";
import Container from "components/UI/Container";

const WhyChooseUs = () => {
  const featureList = [
    {
      title: "Camera System",
      percentage: "85",
    },
    {
      title: "Camera System",
      percentage: "85",
    },
    {
      title: "Camera System",
      percentage: "85",
    },
  ];

  const iconsAndNumbers = [
    {
      icon: <BiCctv />,
      numbers: 123,
      title: "CCTV Projects",
    },
    {
      icon: <CiServer />,
      numbers: 234,
      title: "Server Installed",
    },
    {
      icon: <FaUsers />,
      numbers: 5656,
      title: "Active Clients",
    },
    {
      icon: <GrUserWorker />,
      numbers: 345,
      title: "Working Staffs",
    },
  ];

  return (
    <div className="bg-secondary py-24 text-white">
      <Container>
        <SectionTitle title="we are best" subTitle="Why Choose Us?" />
        <div className=" flex justify-center items-center gap-10 flex-wrap lg:flex-nowrap">
          <div className="basis-1/1 lg:basis-1/2">
            <p className="mb-5 ">
              Manufacture industry became a key sector of production and labour
              in North American and European countries during the Industrial
              Revolution, upsetting previous mercantile and feudal economies.
            </p>

            <div className="flex gap-5 flex-col">
              {featureList.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-between gap-2 mb-2"
                >
                  <div className="flex justify-between items-center">
                    <h2 className="text-[1.2em]">{item.title}</h2>
                    <div className="px-1 rounded-sm bg-white text-secondary font-semibold">
                      {item.percentage}%
                    </div>
                  </div>
                  <div className="relative w-full h-2 rounded-md bg-white text-white">
                    <div
                      className={`absolute w-[${item.percentage}%] h-full bg-primary left-0 top-0 rounded-md`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 w-[100%] lg:w-0  basis-1/1 lg:basis-1/2">
            {iconsAndNumbers.map((item, i) => {
              return (
                <div key={i} className="flex justify-evenly items-center py-5 ">
                  <div className="text-6xl">{item.icon}</div>
                  <div>
                    <h3 className="text-5xl text-primary">{item.numbers}</h3>
                    <span>{item.title}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
