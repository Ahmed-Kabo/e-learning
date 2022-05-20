import React from "react";
import { NavLink } from "react-router-dom";
import { CalendarIcon, ViewGridAddIcon } from "@heroicons/react/solid";

const NavBar = () => {
  return (
    <div className="bg-gray-100 h-screen py-4 px-7">
      <h2 className="text-4xl capitalize pl-8 py-4">logo</h2>
      <ul className="flex flex-col align-center mt-5">
        <li>
          <NavLink
            to="/"
            className="block py-[2px] pl-5 my-3  text-gray-500 flex font-semibold hover:text-blue-600 hover:border-l-4	 hover:border-blue-600 transition-all duration-300 "
          >
            <ViewGridAddIcon className="w-6 mr-5" />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/task"
            className="block py-[2px] pl-5 my-3  text-gray-500 flex font-semibold hover:text-blue-600 hover:border-l-4	 hover:border-blue-600 transition-all duration-300 "
          >
            <CalendarIcon className="w-6 mr-5" />
            <span>Announcement</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
