import Slider from "./Slider";
import WhatWeDo from "./WhatWeDo";
import Testomonial from "./Testomonial";
import Blogs from "./Blogs";

const Homepage = () => {
  return (
    <div className="mb-[5em]">
      <Slider />
      <WhatWeDo />
      <Testomonial />
      <Blogs />
    </div>
  );
};

export default Homepage;
