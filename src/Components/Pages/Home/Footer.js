import React, { useEffect } from "react";
import { GrFacebookOption } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import icon from "../../Assets/Website Related Items/favicon.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <footer className="footer  bg-black text-neutral-content  px-8 md:px-12 lg:px-20 pt-20 pb-36">
      <div data-aos="zoom-in" data-aos-duration="2000">
        <img src={icon} className="w-10" alt="icon" />
        <p>Copyright © 2023 - All right reserved by Infocard.</p>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.facebook.com/infocardsofficial" target="a_blank">
            <GrFacebookOption className="fill-current text-3xl" />
          </a>
          <a
            href="https://www.instagram.com/infocardofficial/"
            target="a_blank"
          >
            <BsInstagram className="fill-current text-3xl" />
          </a>
          <a href="https://www.tiktok.com/@infocardofficial" target="a_blank">
            <FaTiktok className="fill-current text-3xl" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCzIBgRvK492C9NplDV2eFww"
            target="a_blank"
          >
            <BsYoutube className="fill-current text-3xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
