import React from 'react'
import Team from 'components/Homepage/team'
import PagesHeadSection from "components/UI/PagesHeadSection";


const Teams = () => {
  const crumLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Teams",
      path: "/teams",
    },
  ];
  return (
    <div>
          <PagesHeadSection title="Teams" crumLinks={crumLinks}/>
          <Team />
    </div>
  )
}

export default Teams