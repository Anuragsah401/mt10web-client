import React from "react";
import Image from "next/image";

import Container from "components/UI/Container";
import SectionTitle from "components/UI/SectionTitle";

import img1 from "../../../public/image/1.jpg";
import img2 from "../../../public/image/2.jpg";
import img3 from "../../../public/image/3.jpg";
import Link from "next/link";



const Blogs = () => {
  const blogs = [
    {
      image: img1,
      title: "Latest Security Technology For Your House & Garage",
      description:
        "Direct enough off others say eldest may exeter she pain oni.",
      date: "10 AUG 2024",
    },
    {
      image: img2,
      title: "Latest Security Technology For Your House & Garage",
      description:
        "Direct enough off others say eldest may exeter she pain oni.",
      date: "10 AUG 2024",
    },
    {
      image: img3,
      title: "Latest Security Technology For Your House & Garage",
      description:
        "Direct enough off others say eldest may exeter she pain oni.",
      date: "10 AUG 2024",
    },
  ];

  return (
    <div className="py-10">
      <Container>
        <SectionTitle
          title="news & insights"
          subTitle="Latest News & Insights"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 ">
          {blogs.map((blog, i) => {
            return (
              <Link href={""} key={i} className="shadow-lg group ">
                <div className="w-full h-60 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 animate"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 ">
                  <p className=" mb-2 text-primary">{blog.date}</p>
                  <h2 className="text-[1.375em] md:text-[1.5em] font-semibold group-hover:text-redish animate">
                    {blog.title}
                  </h2>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
