import React from "react";
import { ImHome3 } from "react-icons/im";
import { NavLink } from "react-router-dom";
import "./ProfileNav.module.css";
const ProfileNav = () => {
  return (
    <nav className=" w-full md:w-full lg:w-1/3  grid grid-cols-1 fixed bottom-0  md:bottom-9 lg:left-1/3 bg-transparent ">
      <div class="w-full max-w-md mx-auto">
        <div class=" bg-white shadow-2xl rounded-none md:rounded-2xl">
          <div className="flex justify-evenly p-4 lg:rounded-md">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-2xl text-white bg-primary p-3 rounded-xl "
                  : "text-2xl text-primary p-3 rounded-xl hover:bg-primary  hover:text-accent"
              }
              to="/profile"
            >
              <ImHome3 />
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-2xl text-white bg-primary p-3 rounded-xl "
                  : "text-2xl text-primary p-3 rounded-xl hover:bg-primary  hover:text-white"
              }
              to="/"
            >
              <ImHome3 />
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-2xl text-white bg-primary p-3 rounded-xl "
                  : "text-2xl text-primary p-3 rounded-xl hover:bg-primary  hover:text-white"
              }
              to="/"
            >
              <ImHome3 />
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-2xl text-white bg-primary p-3 rounded-xl "
                  : "text-2xl text-primary p-3 rounded-xl hover:bg-primary  hover:text-white"
              }
              to="/"
            >
              <ImHome3 />
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-2xl text-white bg-primary p-3 rounded-xl "
                  : "text-2xl text-primary p-3 rounded-xl hover:bg-primary  hover:text-white"
              }
              to="/"
            >
              <ImHome3 />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ProfileNav;