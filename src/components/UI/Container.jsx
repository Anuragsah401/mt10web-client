import React from "react";

const Container = ({ children }) => {
  return (
    <section className="px-[15px] lg:px-[25px] md:max-w-[1000px] lg:max-w-[1300px] xl:max-w-[2000px] mx-auto">
      {children}
    </section>
  );
};

export default Container;
