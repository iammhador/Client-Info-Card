import React, { useContext } from "react";
import { ImHome3 } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { GiArchiveRegister } from "react-icons/gi";
import { GrGlobe } from "react-icons/gr";
import { TbLogout } from "react-icons/tb";
import { TbEdit } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import "./Navbar.module.css";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const singOut = () => {
    logOut();
  };

  return (
    <nav className="w-full md:w-full lg:w-1/3 grid grid-cols-1 fixed  border-primary border-t-4 bottom-0 md:bottom-0 lg:bottom-9 lg:border-0 lg:left-1/3 bg-gray-50 lg:rounded-xl z-10">
      <div className="w-full max-w-md mx-auto">
        <div className="flex justify-evenly py-2 px-2">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-2xl text-primary  p-3 rounded-xl "
                : "text-2xl text-black p-3 rounded-xl hover:text-primary"
            }
            to="/"
          >
            <ImHome3 className="mx-auto mb-1" />
            <p className="text-sm text-black font-medium uppercase">Home</p>
          </NavLink>
          {user?.email ? (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-2xl text-primary  p-3 rounded-xl "
                  : "text-2xl text-black p-3 rounded-xl hover:text-primary"
              }
              to={`/edit-profile/${user?.displayName}`}
            >
              <TbEdit className="mx-auto mb-1" />
              <p className="text-sm text-black font-medium uppercase">Edit</p>
            </NavLink>
          ) : null}

          {user?.displayName || user?.email ? (
            <>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-2xl text-primary  p-3 rounded-xl "
                    : "text-2xl text-black p-3 rounded-xl hover:text-primary"
                }
                to={`/${user.displayName}`}
              >
                <GrGlobe className="mx-auto mb-1" />
                <p className="text-sm text-black font-medium uppercase">
                  Visit
                </p>
              </NavLink>
            </>
          ) : null}

          {user?.email ? (
            <>
              <NavLink
                onClick={singOut}
                className={({ isActive }) =>
                  isActive
                    ? "text-2xl text-primary  p-3 rounded-xl "
                    : "text-2xl text-black p-3 rounded-xl hover:text-primary"
                }
                to="/"
              >
                <TbLogout className="mx-auto mb-1" />
                <p className="text-sm text-black font-medium uppercase">
                  Logout
                </p>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-2xl text-primary  p-3 rounded-xl "
                    : "text-2xl text-black p-3 rounded-xl hover:text-primary"
                }
                to="/login"
              >
                <CgProfile className="mx-auto mb-1" />
                <p className="text-sm text-black font-medium uppercase">
                  Login
                </p>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-2xl text-primary  p-3 rounded-xl "
                    : "text-2xl text-black p-3 rounded-xl hover:text-primary"
                }
                to="/register"
              >
                <GiArchiveRegister className="mx-auto mb-1" />
                <p className="text-sm text-black font-medium uppercase">
                  Register
                </p>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
