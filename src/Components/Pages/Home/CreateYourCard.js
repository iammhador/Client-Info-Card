import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const CreateYourCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="bg-black px-8 md:px-12 lg:px-20 py-10 md:14 lg:py-20 text-center">
      <div data-aos="zoom-in" data-aos-duration="2000">
        <h2 className="text-white text-xl md:text-2xl lg:text-5xl font-bold uppercase mb-7">
          Ready when you are
        </h2>
      </div>

      <Link to="/register">
        <button className="py-3 px-5 bg-red-600 text-white rounded-2xl">
          Create Your Card
        </button>
      </Link>
    </div>
  );
};

export default CreateYourCard;
