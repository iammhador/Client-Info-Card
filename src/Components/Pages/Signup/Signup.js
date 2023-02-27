import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BiLock } from "react-icons/bi";
import { ThreeDots } from "react-loader-spinner";
import img from "../../Assets/Website Related Items/bg-mockup.png";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { singUpWithEmailPassword, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const username = form.username.value;
    const password = form.password.value;
    const newUser = { email, username };

    setLoading(true);
    fetch("https://infocard-zeta.vercel.app/registration", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setError(data.message);
        } else {
          singUpWithEmailPassword(email, password).then((result) => {
            updateUser({ displayName: username })
              .then(() => {
                toast.success("Successfully Singed Up");
                navigate("/update-profile");
                setLoading(false);
              })
              .catch((err) => {
                console.log(err);
              });
          });
        }
      })
      .catch((error) => {
        console.error(error);
        setError(
          "There was an error while registering, Please try again later."
        );
      });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center w-screen h-screen">
      <div className="left bg-primary flex justify-center flex-col items-center h-screen">
        <img className="" src={img} alt="" />
      </div>
      <div className="right flex justify-center flex-col items-center h-screen px-20 lg:px-0">
        <form onSubmit={handleSignup}>
          <h1 className="font-bold text-primary text-2xl my-7 text-center">
            Register your Account!
          </h1>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <CgProfile className="text-xl text-info font-extrabold" />
            {/* <span className="text-info ml-2">profile/</span> */}
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            ></input>
          </div>
          <label className="label">
            <span className="label-text-alt text-error">{error}</span>
          </label>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <MdOutlineAlternateEmail className="text-xl text-info font-extrabold" />

            <input
              className="pl-2 outline-none border-none"
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
            ></input>
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2">
            <BiLock className="text-xl text-info font-extrabold" />

            <input
              className="pl-2 outline-none border-none"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <Link to="/login" className="text-left text-sm text-gray-600">
            Already have an account?{" "}
            <span className="link link-primary">Login</span>{" "}
          </Link>
          <button
            type="submit"
            className="btn btn-primary my-4 w-full rounded-2xl font-bold shadow-xl text-white hover:bg-black"
          >
            {loading ? (
              <ThreeDots
                height="40"
                width="40"
                radius="9"
                color="#fff"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            ) : (
              "Register"
            )}
          </button>
        </form>
        {/* if social signup gets implemented */}
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

export default Signup;
