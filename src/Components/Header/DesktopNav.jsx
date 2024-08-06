import React from "react";
import { Link } from "react-router-dom";

const DesktopNav = ({ menuItems, logo }) => {
  return (
    <>
      <div className=" h-16 flex justify-between items-center px-6 lg:px-12">
        <a href="/">
          <img src={logo} alt="logo" className=" h-16" />
        </a>
        <ul className=" flex gap-7">
          {menuItems?.map((menu, index) => (
            <li key={index}>
              <Link to={menu} className=" font-medium capitalize text-secondry">
                {menu}
              </Link>
            </li>
          ))}
        </ul>

        {/* login & sign up */}
        {/* <ul className=" flex items-center gap-2 font-medium ">
          <li>
            <button className=" text-secondry px-4 py-2 rounded">Log in</button>
          </li>
          <li>
            <button className=" text-secondry px-4 py-2 rounded">
              Sign up
            </button>
          </li>
        </ul> */}
      </div>
    </>
  );
};

export default DesktopNav;
