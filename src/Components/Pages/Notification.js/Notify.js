import React, { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import SVGImg from "../../Assets/Website Related Items/undraw_celebrating_rtuv.svg";
import { Link } from "react-router-dom";

const Notify = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="text-center py-14 lg:py-36 w-5/6 mx-auto   my-16">
      <p className="text-black text-lg md:text-xl lg:text-2xl font-bold uppercase">
        Hello, {user?.displayName}
      </p>
      <img src={SVGImg} alt="" className="mx-auto h-36 lg:h-52 my-5" />
      <p className="text-gray-400 px-5">
        Your account created successfully. To visit your profile, Please{" "}
        <Link
          to={`/profile/${user?.displayName}`}
          className="text-primary font-medium text-lg underline"
        >
          click
        </Link>{" "}
        this url.
      </p>
    </div>
  );
};

export default Notify;
