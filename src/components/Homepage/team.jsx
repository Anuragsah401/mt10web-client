import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { LuMail } from "react-icons/lu";

import Container from "components/UI/Container";
import SectionTitle from "components/UI/SectionTitle";
import Image from "next/image";

import img1 from "assets/bibek.jpg";
import img2 from "assets/sudhan.jpg";

const Team = () => {
  const teamDetails = [
    {
      name: "Bibek sah",
      post: "Network Engineer",
      email: "bibek@bibek.com",
      phoneNo: "+977 9864831512",
      facebook: "",
      instagram: "",
      linkend: "",
      pic: img1,
    },
    {
      name: "Sudhan Dahal",
      post: "Network Engineer",
      email: "sudhandahal@example.com",
      phoneNo: "+977 9843545345",
      facebook: "",
      instagram: "",
      linkend: "",
      pic: img2,
    },
  ];
  return (
    <div className="py-20">
      <Container>
        <SectionTitle title="team" subTitle="Meet Our Professional Team" />

        <div className="flex gap-10 justify-center items-center flex-wrap">
          {teamDetails.map((team, i) => {
            return (
              <div
                key={i}
                className="flex flex-col items-center border border-[#EBECEC] group"
              >
                <Image
                  src={team.pic}
                  alt={team.name}
                  width={300}
                  height={300}
                  className="object-cover"
                />
                <div className="text-center pt-[20px] animate group-hover:text-white group-hover:bg-[#333] w-[100%] h-[100%]">
                  <h3 className="font-semibold text-[1.375em] mb-1 ">
                    {team.name}
                  </h3>
                  <div className="mb-3 text-primary group-hover:text-white animate ">
                    {team.post}
                  </div>

                  <div className="flex justify-center gap-2 items-center mb-1">
                    <FiPhone size={"1.3em"} />
                    {team.phoneNo}
                  </div>

                  <div className="mb-5 flex justify-center gap-2 items-center">
                    <LuMail />
                    {team.email}
                  </div>

                  <button className="rounded-sm -mb-5 w-[50%] mx-auto animate py-3 bg-primary text-white hover:bg-secondary flex justify-center items-center gap-1">
                    <span>View Profile</span>
                    <FaAngleRight />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Team;
