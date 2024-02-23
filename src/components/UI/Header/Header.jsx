"use client";

import { useState } from "react";

import InfoBar from "./InfoBar";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Header = () => {
  const [toggleBar, setToggleBar] = useState(false);

  const toggleSidebar = () => {
    setToggleBar((prevState) => !prevState);
  };

  return (
    <div className="">
      <InfoBar toggleSidebar={toggleSidebar} />
      <Navbar />
      <Sidebar toggleBar={toggleBar} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Header;
