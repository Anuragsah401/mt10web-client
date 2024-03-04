import React from 'react'
import BlogsItems from 'components/Homepage/Blogs'
import PagesHeadSection from 'components/UI/PagesHeadSection';


const Blogs = () => {
    const crumLinks = [
        {
          title: "Home",
          path: "/",
        },
        {
          title: "Blogs",
          path: "/blogs",
        },
      ];
      return (
        <div className="mb-20">
              <PagesHeadSection title="Blogs" crumLinks={crumLinks}/>
              <BlogsItems />
        </div>
      )
}

export default Blogs