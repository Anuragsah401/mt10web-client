import React from "react";
import Image from "next/image";

import Container from "components/UI/Container";
import SectionTitle from "components/UI/SectionTitle";

import icon1 from "assets/meeting.png";
import icon2 from "assets/data.png";
import icon3 from "assets/plan.png";
import icon4 from "assets/business.png";

const howdowework = () => {
  const workDetails = [
    {
      icon: icon1,
      number: 1,
      title: "Meetup",
      description:
        "Evening do forming oabserve spirits is in. Country hearted be of justice sending",
    },
    {
      icon: icon2,
      number: 2,
      title: "Collect Info",
      description:
        "Evening do forming observe spirits is in. Country hearted be of justice sending",
    },
    {
      icon: icon3,
      number: 3,
      title: "Implement Plan",
      description:
        "Evening do forming observe spirits is in. Country hearted be of justice sending",
    },
    {
      icon: icon4,
      number: 4,
      title: "Start Work",
      description:
        "Evening do forming observe spirits is in. Country hearted be of justice sending",
    },
  ];

  const customLine =
    "before:w-1 before:h-32 before:bg-[#DDDDDD] before:absolute before:-top-[8em] before:z-[5]";
  return (
    <div className="py-20">
      <Container>
        <SectionTitle title="steps" subTitle="How Do We Work" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          {workDetails.map((item, i) => {
            return (
              <div
                key={i}
                className="flex flex-col items-center text-center even:flex-col-reverse"
              >
                <div className="w-36 h-36 b rounded-full bg-[#EBEDF2] flex justify-center items-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    className="w-[4.5em] h-[4.5em] object-cover"
                  />
                </div>

                <div className="w-1 h-36 bg-[#dddddd]"></div>

                <div
                  className={` relative  bg-[#EBEDF2] w-16 h-16 rounded-full flex justify-center items-center`}
                >
                  <h3 className="text-xl font-bold bg-[#DDDDDD] w-10 h-10 rounded-full flex justify-center items-center">
                    {item.number}
                  </h3>
                </div>
                <h3 className=" text-xl font-bold my-4">{item.title}</h3>

                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default howdowework;
