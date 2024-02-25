import React from "react";
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
              <div key={i}>
                <Image src={team.pic} alt={team.name} width={300} height={300} className="object-cover"/>
                  <div className="text-center mt-[20px] mb-[30px]">

                  <h3 className="font-semibold text-[1.375em] mb-1">{team.name}</h3>
                  <span className="text-primary">{team.post}</span>
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
