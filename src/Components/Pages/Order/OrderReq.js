import React from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiUser3Line } from "react-icons/ri";
import { BiLock } from "react-icons/bi";

const OrderList = () => {
  return (
    <div className="w-5/6 mx-auto my-10">
      <h1 class="text-gray-800 font-bold text-2xl mb-5 text-center">
        Make A Order
      </h1>
      <div class="bg-white py-20 md:py-0 lg:py-0">
        <form class="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 mx-1">
              <RiUser3Line className="text-xl text-gray-400" />
              <input
                class="pl-2 outline-none border-none"
                type="text"
                name="username"
                id="username"
                placeholder="Username"
              />
            </div>

            <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 mx-1">
              <RiUser3Line className="text-xl text-gray-400" />
              <input
                class="pl-2 outline-none border-none"
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Full Name"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 mx-1">
              <MdOutlineAlternateEmail className="text-xl text-gray-400" />
              <input
                class="pl-2 outline-none border-none"
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
              />
            </div>

            <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 mx-1">
              <RiUser3Line className="text-xl text-gray-400" />
              <input
                class="pl-2 outline-none border-none"
                type="text"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 mx-1">
              <RiUser3Line className="text-xl text-gray-400" />
              <input
                class="pl-2 outline-none border-none"
                type="text"
                name="contactNumber"
                id="contactNumber"
                placeholder="Contact Number"
              />
            </div>

            <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 mx-1">
              <MdOutlineAlternateEmail className="text-xl text-gray-400" />
              <input
                class="pl-2 outline-none border-none"
                type="text"
                name="address"
                id="address"
                placeholder="Delivery Address"
              />
            </div>
          </div>

          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            className="mr-2"
          />
          <label htmlFor="">Check your information and confirm</label>

          <button
            type="submit"
            class="block w-full bg-blue-800 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 hover:bg-blue-700"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderList;
