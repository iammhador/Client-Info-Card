import React from "react";
import BannerImg from "../../Assets/Website Related Items/banner.jpg";
import Information from "../../Assets/Website Related Items/2.jpg";
const Banner = () => {
  return (
    <div>
      <img src={BannerImg} alt="Banner" className="w-full" />
      <img src={Information} alt="" className="w-full" />
    </div>
  );
};

export default Banner;
