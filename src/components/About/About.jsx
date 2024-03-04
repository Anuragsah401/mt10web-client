import React from "react";
import PagesHeadSection from "components/UI/PagesHeadSection";
import SectionTitle from "components/UI/SectionTitle";
import WhyChooseUs from "./WhyChooseUs";
import Container from "components/UI/Container";
import WorkArea from "./WorkArea";

const About = () => {
  const crumLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
  ];

  return (
    <div className="">
      <PagesHeadSection title="about" crumLinks={crumLinks} />

      <WhyChooseUs />
      <WorkArea />
    </div>
  );
};

export default About;
