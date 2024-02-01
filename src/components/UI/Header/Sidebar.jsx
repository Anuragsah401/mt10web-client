import React, { useEffect } from "react";

import logo from "assets/logo.png";
import Image from "next/image";
import { IconX } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = ({ toggleBar, toggleSidebar }) => {
  if (!toggleBar) {
    return null;
  }

  const pathname = usePathname();

  const linkItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Shop", link: "/shop" },
    { name: "Blog", link: "/blogs" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="w-full max-w-[400px] h-full p-[2.5em] z-50 fixed right-0 top-0 lg:hidden bg-secondary text-grayish">
      <div className="flex justify-between items-center mb-28 ">
        <div className="flex flex-col items-center ">
          <Image src={logo} alt="Mount10tech logo" width={100} height={100} />
          <div className="text-[10px] md:text-[13px] font-semibold ">
            MOUNT 10 TECHNOLOGIES
          </div>
        </div>
        <button className="text-light-dark">
          <IconX onClick={toggleSidebar} />
        </button>
      </div>

      <ul className="flex flex-col justify-between uppercase">
        {linkItems.map((item, i) => {
          return (
            <Link href={item.link} className="text-white hover:bg-light-dark">
              <li
                key={`linkItem-${i}`}
                className={`${
                  pathname == item.link ? "bg-light-dark" : ""
                } p-3`}
              >
                {item.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
