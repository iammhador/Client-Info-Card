import React from "react";
import { ImHome3 } from "react-icons/im";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="custom-navbar w-full md:w-full lg:w-1/3 grid grid-cols-1 fixed bottom-0  lg:bottom-16 lg:left-1/3 bg-transparent">
      <div className="flex justify-around gap-2 bg-secondary px-3 py-5 lg:rounded-md">
        <NavLink to="/" className="p-3 hover:bg-neutral hover:rounded-md">
          <ImHome3 className="text-2xl text-black " />
        </NavLink>

        <NavLink to="/" className="p-3 hover:bg-neutral hover:rounded-md">
          <ImHome3 className="text-2xl text-black " />
        </NavLink>

        <NavLink to="/" className="p-3 hover:bg-neutral hover:rounded-md">
          <ImHome3 className="text-2xl text-black " />
        </NavLink>

        <NavLink to="/" className="p-3 hover:bg-neutral hover:rounded-md">
          <ImHome3 className="text-2xl text-black " />
        </NavLink>

        <NavLink to="/" className="p-3 hover:bg-neutral hover:rounded-md">
          <ImHome3 className="text-2xl text-black " />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;