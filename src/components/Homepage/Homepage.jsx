import Slider from "./Slider";
import WhatWeDo from "./WhatWeDo";
import Testomonial from "./Testomonial";
import Blogs from "./Blogs";
import Team from "./team";
import Howdowework from "./Howdowework";



const Homepage = () => {
  return (
    <div className="mb-[5em]">
      <Slider />
      <WhatWeDo />
      <Howdowework />
      <Testomonial />
      <Team />
      <Blogs />
    </div>
  );
};

export default Homepage;
