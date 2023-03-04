import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const PasswordReset = () => {
  const { passwordReset } = useContext(AuthContext);
  const handleReset = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    passwordReset(email)
      .then(() => {
        toast.success("Password Reset Email Sent");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <form
      onSubmit={handleReset}
      className="text-primary flex justify-center flex-col gap-5 items-center h-screen"
    >
      <h1 className="text-3xl font-semibold">Enter Your Email</h1>
      <div className="flex items-center border-2 py-2 px-3 rounded-2xl ">
        <MdOutlineAlternateEmail className="text-xl text-primary font-extrabold" />
        <input
          className="pl-2 outline-none border-none "
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
        ></input>
      </div>
      <button type="submit" className="btn btn-primary text-white">
        Reset Password
      </button>
    </form>
  );
};

export default PasswordReset;
