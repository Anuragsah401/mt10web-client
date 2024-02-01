import React from "react";
import Link from "next/link";

import {
  FacebookIcon,
  LinkedInIcon,
  InstaIcon,
  TiktokIcon,
} from "assets/icons/SocialMediaIcon";
import { IconHeartCode } from "@tabler/icons-react";

import LocationIcon from "assets/icons/LocationIcon";
import CallIcon from "assets/icons/CallIcon";

import Image from "next/image";

import logo from "assets/logo.png";
import MailIconSmall from "assets/icons/MailIconSmall";

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

  const workingHours = [
    { day: "Sunday", time: "9am - 5pm" },
    { day: "Monday", time: "9am - 5pm" },
    { day: "Tuesday", time: "9am - 5pm" },
    { day: "Wendsday", time: "9am - 5pm" },
    { day: "Thursday", time: "9am - 5pm" },
    { day: "Friday", time: "9am - 5pm" },
    { day: "Saturday", time: "Closed" },
  ];

  return (
    <div className="bg-secondary">
      <div className="flex flex-wrap xl:flex-nowrap justify-start lg:justify-center xl:justify-between gap-10 text-white pb-[2em] px-5 lg:px-0 md:max-w-[720px] lg:max-w-[1300px] mx-auto">
        <div className=" bg-white text-light-dark -mt-[4.4em]">
          <div className="bg-primary flex gap-5 py-6 justify-center">
            {icons.map((item, index) => (
              <div
                key={index}
                className="text-white hover:text-redish transition-all duration-300 ease-in-out"
              >
                <Link href={item.link}>
                  <item.Icon />
                </Link>
              </div>
            ))}
          </div>

          <div className=" px-7 py-10">
            <div className="flex flex-col items-center mb-6">
              <Image
                src={logo}
                alt="Mount10tech logo"
                width={100}
                height={100}
              />
              <div className="text-[13px] font-semibold">
                MOUNT 10 TECHNOLOGIES
              </div>
            </div>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              voluptas ea
            </p>

            <div className="mt-6 flex flex-col gap-3 ">
              <div className="flex items-center gap-2 hover:text-redish">
                <MailIconSmall />
                <a href="mailto:example@gmail.com">example@gmail.com</a>
              </div>
              <div className="flex items-center gap-2 hover:text-redish">
                <CallIcon />
                <a href="tel:+9779845738741">+977 9845738741</a>
              </div>
              <div className="flex items-center gap-2">
                <LocationIcon />
                Kathmandu, Nepal
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap flex-col md:flex-row flex-grow-0 flex-shrink-0 flex-basis-auto gap-x-[3em] gap-y-[2.5em] pt-[2em] md:pt-10 xl:pt-[6em] xl:px-10">
          <div>
            <h2 className="text-[1.5em] font-semibold mb-5">Company</h2>
            <ul className="">
              {links.map((item, i) => {
                return (
                  <Link
                    href={item.link}
                    key={i}
                    className="hover:text-[#fd6565]"
                  >
                    <li className="mt-4">{item.name}</li>
                  </Link>
                );
              })}
            </ul>
          </div>

          <div>
            <h2 className="text-[1.5em] font-semibold mb-5">Working Hours</h2>
            <table>
              <tbody>
                {workingHours.map((item, i) => {
                  return (
                    <tr className="flex justify-between gap-8 mb-2" key={i}>
                      <th className="font-semibold">{item.day}</th>
                      <td className="ml-5 text-left">{item.time}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="pt-5 md:pt-10 xl:pt-[6em] lg:ml-5">
          <h2 className="text-[1.5em] font-semibold mb-5">Newsletter</h2>
          <p className="text-left">
            Subscribe to our nesletter, Your mail address is very confidential.
          </p>
          <form action="" className="mt-5 w-[100%]">
            <input
              type="email"
              placeholder="Email adderess"
              required
              className="px-3 py-2 rounded-sm w-[100%] mb-3 text-primary"
            />
            <button
              type="submit"
              className="bg-primary p-2 rounded-sm w-[100%]"
            >
              Subscribe now
            </button>
          </form>
        </div>
      </div>

      <div className="text-white text-center py-4 border-t border-white">
        <p>Copyright © 2024 website by Mountain technology</p>
        <small>
          Made with 💕 by{" "}
          <a href="hello.com" className="underline hover:text-redish">
            Anurag
          </a>
        </small>
      </div>
    </div>
  );
};

export default Footer;
