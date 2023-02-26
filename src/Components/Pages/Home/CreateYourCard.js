import React from "react";
import { Link } from "react-router-dom";

const CreateYourCard = () => {
  return (
    <div className="bg-black px-20 py-20 text-center">
      <h2 className="text-white text-5xl font-bold uppercase mb-7">
        Ready when you are
      </h2>

      <Link to="/register">
        <button className="py-3 px-5 bg-red-600 text-white rounded-2xl">
          Create Your Card
        </button>
      </Link>
    </div>
  );
};

export default CreateYourCard;
