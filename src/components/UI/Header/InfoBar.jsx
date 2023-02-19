import React from "react";
import Image from "next/image";

import logo from "assets/logo.png";
import BuildingIcon from "assets/icons/BuildingIcon";
import ClockIcon from "assets/icons/ClockIcon";
import MailIcon from "assets/icons/MailIcon";

const InfoBar = () => {
  const infoItem = [
    {
      logo: <BuildingIcon />,
      title: "Kathmandu, Nepal",
      subTitle: <a href="tel:+9779845738741">+977 9845738741</a>,
    },
    {
      logo: <ClockIcon />,
      title: "Monday to Friday",
      subTitle: <span>9:00am - 6:00pm</span>,
    },
    {
      logo: <MailIcon />,
      title: "Get in Touch",
      subTitle: <a href="mailto:example@gmail.com">example@gmail.com</a>,
    },
  ];

  return (
    <div className="flex justify-between px-8 py-4 lg:pb-[4rem] shadow-md">
      <div>
        <Image src={logo} alt="Mount10tech logo" width={100} height={100} />
      </div>
      <div className="hidden lg:block">
        <ul className="flex gap-7">
          {infoItem.map((item, i) => {
            return (
              <li key={`infoItem ${i}`} className="flex gap-5">
                <div className="p-3 bg-primary text-[#fff] rounded-sm">{item.logo}</div>
                <div>
                  {item.title} <br />
                  {item.subTitle}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default InfoBar;
