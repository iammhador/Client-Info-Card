import React, { useEffect } from "react";
import BannerImg from "../../Assets/Website Related Items/banner.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="fade-down" data-aos-duration="2000">
      <img src={BannerImg} alt="Banner" className="w-full" />
    </div>
  );
};

export default Banner;
