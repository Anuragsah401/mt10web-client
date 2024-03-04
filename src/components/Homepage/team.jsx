import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

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
      email: "bibeksah254@gmail.com",
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
        <SectionTitle title="team" subTitle="Meet Our Professional Teams" />

        <div className="flex gap-10 gap-y-16 justify-center flex-wrap">
          {teamDetails.map((team, i) => {
            return (
              <div
                key={i}
                className="flex bg-white relative z-[5] flex-col items-center border border-[#EBECEC] group "
              >
                <Image
                  src={team.pic}
                  alt={team.name}
                  width={350}
                  height={300}
                  className="object-cover"
                />

                <div className="relative bg-white  group-hover:max-h-auto text-center pt-[20px] animate group-hover:text-white group-hover:bg-[#333] w-[100%] h-[100%]">
                  <h3 className="font-semibold text-[1.375em] mb-1 ">
                    {team.name}
                  </h3>

                  <div className="mb-3 text-primary group-hover:text-white animate ">
                    {team.post}
                  </div>

                  <a
                    href={`tel:${team.phoneNo}`}
                    className="inline-flex justify-center gap-2 items-center mb-1 hover:text-redish "
                  >
                    <FiPhone size={"1.3em"} />
                    {team.phoneNo}
                  </a>

                  <a
                    href={`mailto:${team.email}`}
                    className="mb-5 flex justify-center gap-2 items-center hover:text-redish "
                  >
                    <LuMail size={"1.3em"} />
                    {team.email}
                  </a>

                  <button className="rounded-sm -mb-5 mt-5 w-[50%] mx-auto animate py-3 bg-primary text-white hover:bg-redish flex justify-center items-center gap-1">
                    <span>View Profile</span>
                    <FaAngleRight />
                  </button>

                  <div className="absolute -z-[1] group-hover:-top-12 group-hover:z-0 animate top-0 inset-x-0 flex justify-center gap-3 text-[1.5em] py-3 w-[50%] mx-auto bg-primary text-white rounded-t-md">
                    <a href={team.facebook}>
                      <GrFacebookOption className="hover:text-redish animate" />
                    </a>
                    <a href={team.instagram}>
                      <FaInstagram className="hover:text-redish animate" />
                    </a>
                    <a href={team.linkend}>
                      <FaLinkedin className="hover:text-redish animate" />
                    </a>
                  </div>
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
