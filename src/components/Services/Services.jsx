import React from "react";
import WhatWeDo from "components/Homepage/WhatWeDo";
import PagesHeadSection from "components/UI/PagesHeadSection";
import Container from "components/UI/Container";


const Services = () => {
  const crumLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Services",
      path: "/services",
    },
  ];

  return (
    <div className="mb-14">
      <PagesHeadSection title="Service" crumLinks={crumLinks} />
      <Container>
        <WhatWeDo />
      </Container>
    </div>
  );
};

export default Services;
