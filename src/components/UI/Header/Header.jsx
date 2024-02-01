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
    <>
      <InfoBar toggleSidebar={toggleSidebar} />
      <Navbar />
      <Sidebar toggleBar={toggleBar} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Header;
