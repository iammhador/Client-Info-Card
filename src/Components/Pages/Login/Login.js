import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BiLock } from "react-icons/bi";
import img from "../../Assets/Website Related Items/bg-mockup.png";

const Login = () => {
  const { user, login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password)
      .then(() => {
        toast.success("Logged Successfully");
        // navigate(`profile/${user?.displayName}`);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center h-screen">
      <div className="left bg-primary flex justify-center flex-col items-center h-screen ">
        <img className="" src={img} alt="" />
      </div>
      <div className="right flex justify-center flex-col items-center h-screen px-20 lg:px-0">
        <form onSubmit={handleLogin}>
          <h1 className="font-bold text-primary text-2xl my-7 text-center">
            Login to your account!
          </h1>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 ">
            <MdOutlineAlternateEmail className="text-xl text-info font-extrabold" />
            <input
              className="pl-2 outline-none border-none "
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
            ></input>
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2 ">
            <BiLock className="text-xl text-info font-extrabold" />
            <input
              className="pl-2 outline-none border-none"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <Link to="/register" className="text-left text-sm text-gray-600">
            Don't have an account?{" "}
            <span className="link link-primary">Register</span>{" "}
          </Link>
          <button
            type="submit"
            className="btn btn-primary my-4 w-full rounded-2xl font-bold text-white shadow-xl hover:bg-black"
          >
            LOGIN
          </button>
        </form>
        {/* if social login gets implemented */}
        {/* <div className="divider text-primary before:bg-primary after:bg-primary w-1/2 mx-auto">
          OR
        </div>
        <div className="flex">
          <button className="btn btn-outline btn-primary mr-2 font-bold">
            <BsGoogle className="mr-1" />
            Continue With Google
          </button>
          <button className="btn btn-outline btn-primary font-bold">
            <BsFacebook className="mr-1" />
            Continue With Facebook
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
