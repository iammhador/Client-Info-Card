import React from "react";
import { ImHome3 } from "react-icons/im";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="custom-navbar w-full md:w-full lg:w-1/3 grid grid-cols-1 fixed bottom-0  lg:bottom-16 lg:left-1/3 bg-transparent ">
      <div class="w-full max-w-md mx-auto">
        <div class="px-7 bg-white shadow-2xl rounded-2xl mb-5">
          <div className="flex justify-around gap-2 px-3 py-5 lg:rounded-md">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " text-2xl text-white bg-primary p-4 rounded-xl "
                  : "text-2xl text-primary p-3 rounded-xl hover:bg-gray-600  hover:text-white"
              }
              to="/"
            >
              <ImHome3 />
            </NavLink>

            <NavLink to="/" className="p-3 hover:bg-neutral hover:rounded-md">
              <ImHome3 className="text-2xl text-primary " />
            </NavLink>

            <NavLink to="/" className="p-3 hover:bg-neutral hover:rounded-md">
              <ImHome3 className="text-2xl text-primary " />
            </NavLink>

            <NavLink to="/" className="p-3 hover:bg-neutral hover:rounded-md">
              <ImHome3 className="text-2xl text-primary " />
            </NavLink>

            <NavLink to="/" className="p-3 hover:bg-neutral hover:rounded-md">
              <ImHome3 className="text-2xl text-primary " />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
