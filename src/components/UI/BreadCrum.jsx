import React from "react";
import Link from "next/link";

const BreadCrum = ({crumLinks}) => {

  return (
    <div className="flex justify-center">
      <ul className="flex justify-center border border-white py-1 px-2">
        {crumLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.path}
              className="text-gray-900 hover:text-gray-700 "
            >
              <span className="hover:text-redish animate">{link.title}</span>
              {index !== crumLinks.length - 1 && <span className="mx-1">&gt;</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BreadCrum;
