import Slider from "./Slider";
import WhatWeDo from "./WhatWeDo";
import Testomonial from "./Testomonial";
import Blogs from "./Blogs";
import Team from "./team";


const Homepage = () => {
  return (
    <div className="mb-[5em]">
      <Slider />
      <WhatWeDo />
      <Testomonial />
      <Team />
      <Blogs />
    </div>
  );
};

export default Homepage;
