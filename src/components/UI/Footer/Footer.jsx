import React from "react";
import Link from "next/link";

import {
  FacebookIcon,
  LinkedInIcon,
  InstaIcon,
  TiktokIcon,
} from "assets/icons/SocialMediaIcon";

import Image from "next/image";

import logo from "assets/logo.png";

const Footer = () => {
  const icons = [
    { Icon: FacebookIcon, link: "http://" },
    { Icon: LinkedInIcon, link: "" },
    { Icon: InstaIcon, link: "http://" },
    { Icon: TiktokIcon, link: "" },
  ];

  const links = [
    { name: "About", link: "" },
    { name: "Blog", link: "" },
    { name: "Service", link: "" },
    { name: "Privacy Policy", link: "" },
    { name: "Projects", link: "" },
  ];

  return (
    <div className="flex px-8 bg-secondary text-white">
      <div>
        <div className="bg-primary flex gap-5 py-6 justify-center">
          {icons.map((item, index) => (
            <div key={index} className="hover:scale-[1.1] transform-all 2s ease-in-out">
              <Link href={item.link} >
                <item.Icon />
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center my-10">
          <Image src={logo} alt="Mount10tech logo" width={100} height={100} />
          <div className="text-[13px] font-semibold">MOUNT 10 TECHNOLOGIES</div>
        </div>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          voluptas ea eius asperiores doloremque impedit iure assumenda
          aspernatur cumque.
        </p>

        <div className="mt-6">
           Kathmandu, Nepal <br />
           +977 98457838741 <br />
           example@example.com
        </div>


      </div>

      <div>
        <div>
          <h2 className="text-[1.5em] font-semibold">Company</h2>
          <ul className="mt-5">
            {links.map((item, i) => {
              return (
                <Link href={item.link} key={i} className="hover:text-[#fd6565]">
                  <li className="mt-4">{item.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
