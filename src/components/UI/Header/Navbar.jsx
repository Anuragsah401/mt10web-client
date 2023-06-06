"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname()

  const linkItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Shop", link: "/shop" },
    { name: "Blog", link: "/blogs" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="hidden relative z-10 lg:block max-w-[900px] mx-auto py-5 px-8 bg-secondary text-[#fff] -mt-8 -mb-8 rounded-md">
      <div></div>

      <ul className="flex justify-between">
        {linkItems.map((item, i) => {
          return (
            <li
              key={`linkItem-${i}`}
              className={pathname == item.link ? "text-[#fd6565]" : ""}
            >
              <Link href={item.link} className="hover:text-[#fd6565]">{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
