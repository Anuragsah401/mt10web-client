import React from "react";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="text-center mb-11">
      <span className="text-lg text-primary uppercase">{title}</span>
      <h2 className="text-[1.75em] md:text-[2.625em] font-semibold">
        {subTitle}
      </h2>
    </div>
  );
};

export default SectionTitle;
