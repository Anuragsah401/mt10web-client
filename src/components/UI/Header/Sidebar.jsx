import React, { useEffect } from "react";

import logo from "assets/logo.png";
import Image from "next/image";
import {
  IconX,
  IconLocationPin,
  IconPhoneCall,
  IconMail,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = ({ toggleBar, toggleSidebar }) => {
  const pathname = usePathname();
  
  if (!toggleBar) {
    return null;
  }


  const linkItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Teams", link: "/teams" },
    { name: "Blogs", link: "/blogs" },
    { name: "Contact", link: "/contact" },
  ];

  const SocialMediaIcons = [
    { icon: <IconBrandFacebook size="1.5em" />, link: "http://" },
    { icon: <IconBrandLinkedin size="1.5em" />, link: "" },
    { icon: <IconBrandInstagram size="1.5em" />, link: "http://" },
    { icon: <IconBrandTiktok size="1.5em" />, link: "" },
  ];

  return (
    <div className="w-full overflow-y-auto max-w-[25em] h-full p-[2.5em] z-50 fixed right-0 top-0 lg:hidden bg-secondary text-grayish">
      <div className="flex justify-between items-center mb-16 pb-4 border-b border-light-dark ">
        <div className="flex flex-col items-center ">
          <Image src={logo} alt="Mount10tech logo" width={100} height={100} />
          <div className="text-[10px] md:text-[13px] font-semibold ">
            MOUNT 10 TECHNOLOGIES
          </div>
        </div>
        <button className="hover:text-white active:scale-110">
          <IconX onClick={toggleSidebar} />
        </button>
      </div>

      <ul className="flex flex-col justify-between uppercase">
        {linkItems.map((item, i) => {
          return (
            <Link
              key={i}
              href={item.link}
              className="text-white hover:bg-light-dark transition-all duration-300 ease-in-out"
              onClick={toggleSidebar}
            >
              <li
                key={`linkItem-${i}`}
                className={`${
                  pathname == item.link ? "bg-light-dark" : ""
                } p-3 border-t border-light-dark`}
              >
                {item.name}
              </li>
            </Link>
          );
        })}
      </ul>

      <div className="mt-10">
        <div className="flex items-center gap-3 mb-3">
          <IconStyle icon={<IconLocationPin size={"1.2em"} />} />
          <span>Dhumbarahi, Kathmandu</span>
        </div>

        <a
          href="tel:+9779845738741"
          className="flex gap-3 items-center mb-3 group "
        >
          <IconStyle icon={<IconPhoneCall size={"1.2em"} />} />
          <span className="group-hover:text-white transition-all duration-300 ease-in-out">
            +977 9845738741
          </span>
        </a>

        <a
          href="mailto:example@gmail.com"
          className="flex gap-3 items-center mb-3 group transition-all duration-300 ease-in-out"
        >
          <IconStyle icon={<IconMail size={"1.2em"} />} />
          <span className="group-hover:text-white transition-all duration-300 ease-in-out">
            example@example.com
          </span>
        </a>

        <div></div>
      </div>

      <div className="flex gap-3 my-10">
        {SocialMediaIcons.map((items, index) => {
          return (
            <a key={index} href="" className="group">
              <IconStyle key={index} icon={items.icon} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

const IconStyle = ({ icon }) => {
  return (
    <div className="w-[40px] transition-all duration-300 ease-in-out group-hover:text-white group-hover:bg-[#ffffff33] h-[40px] bg-[#2c2c2c] flex justify-center items-center">
      {icon}
    </div>
  );
};

export default Sidebar;
