"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname()

  const linkItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Teams", link: "/teams" },
    { name: "Blogs", link: "/blogs" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="hidden top-0 sticky z-10 lg:block max-w-[900px] mx-auto py-5 px-8 bg-secondary text-[#fff] -my-8 rounded-md">

      <ul className="flex justify-between">
        {linkItems.map((item, i) => {
          return (
            <li
              key={`linkItem-${i}`}
              className={pathname == item.link ? "text-redish" : ""}
            >
              <Link href={item.link} className="hover:text-redish">{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
