import React from "react";
import SectionTitle from "components/UI/SectionTitle";
import Container from "components/UI/Container";
import PagesHeadSection from "components/UI/PagesHeadSection";

const Contact = () => {
  const crumLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div>
      <PagesHeadSection title="Contact" crumLinks={crumLinks} />
      <div className="py-20 mb-20">
        <Container>
          <SectionTitle
            title="intrested in"
            subTitle="Say Your Security Needs"
          />

          <form action="" className="flex flex-col gap-5 text-white">
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Name"
                className="bg-[#363535] px-5 py-3 rounded-md"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-[#363535] px-5 py-3 rounded-md"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="bg-[#363535] px-5 py-3 rounded-md"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="bg-[#363535] px-5 py-3 rounded-md"
              />
            </div>
            <textarea
              name=""
              placeholder="Name"
              id=""
              cols="10"
              rows="10"
              className="bg-[#363535] px-5 py-3 rounded-md"
            ></textarea>
            <div>
              <button
                type="submit"
                className="bg-[#363535] px-5 py-3 rounded-md text-white"
              >
                Submit Request
              </button>
            </div>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
