import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import img from "../../Assets/Website Related Items/mockup 2.png";
// import { BsGoogle } from "react-icons/bs";
// import { BsFacebook } from "react-icons/bs";
const Login = () => {
  const { login } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password).then((data) => {
      toast.success("Logged Successfully");
      Navigate("/");
    });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center w-screen h-screen">
      <div className="left bg-primary flex justify-center flex-col items-center h-screen">
        <img className="" src={img} alt="" />
      </div>
      <div className="right flex justify-center flex-col items-center h-screen">
        <form onSubmit={handleLogin}>
          <h1 className="font-bold text-primary text-2xl my-7 text-center">
            Login to your account!
          </h1>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="text-xl text-gray-400"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path>
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
            ></input>
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="text-xl text-gray-400"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C9.243 2 7 4.243 7 7v2H6c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v2H9V7zm9.002 13H13v-2.278c.595-.347 1-.985 1-1.722 0-1.103-.897-2-2-2s-2 .897-2 2c0 .736.405 1.375 1 1.722V20H6v-9h12l.002 9z"></path>
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <Link to="/signup" className="text-left text-sm text-gray-600">
            Don't have an account?{" "}
            <span className="link link-primary">Signup</span>{" "}
          </Link>
          <button
            type="submit"
            className="btn btn-primary my-4 w-full rounded-2xl font-bold text-white"
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
