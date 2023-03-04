import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import TopImage from "../../Assets/Website Related Items/top.jpg";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
//# Personal Information:
import { CgProfile } from "react-icons/cg";
import { MdLocationPin } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdOutlineTagFaces } from "react-icons/md";
import { MdWorkOutline } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";

//# Social Media:
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { GrReddit } from "react-icons/gr";
import { BsSnapchat } from "react-icons/bs";
import { BsSpotify } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { AiFillMediumCircle } from "react-icons/ai";
import { SiUpwork } from "react-icons/si";
import { SiFiverr } from "react-icons/si";
import { toast } from "react-hot-toast";

import AOS from "aos";
import "aos/dist/aos.css";
const UpdateProfile = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    //# Personal Details:
    const fullName = form.fullName.value;
    const location = form.location.value;
    const aboutYourself = form.aboutYourself.value;
    const designation = form.designation.value;
    const contactNumber = form.contactNumber.value;
    const websiteAddress = form.websiteAddress.value;

    //# Social Information:
    const facebook = form.facebook.value;
    const instagram = form.instagram.value;
    const linkedIn = form.linkedIn.value;
    const twitter = form.twitter.value;
    const youTube = form.youTube.value;
    const whatsApp = form.whatsApp.value;
    const tikTok = form.tikTok.value;
    const gitHub = form.gitHub.value;
    const reddit = form.reddit.value;
    const snapchat = form.snapchat.value;
    const spotify = form.spotify.value;
    const pinterest = form.pinterest.value;
    const telegram = form.telegram.value;
    const medium = form.medium.value;
    const upwork = form.upwork.value;
    const fiverr = form.fiverr.value;

    //# Images Pass To IMGBB Server:

    const image = e.target.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_API_KEY}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        //# If Successfully Upload Profile Picture, Then Only Other's Data Will Go To Server:
        if (data.success) {
          const updateInformation = {
            //# Personal Details:
            fullName: fullName,
            image: data.data.url,
            email: user.email,
            location: location,
            aboutYourself: aboutYourself,
            designation: designation,
            contactNumber: contactNumber,
            websiteAddress: websiteAddress,

            //# Social Media:
            facebook: facebook,
            instagram: instagram,
            linkedIn: linkedIn,
            twitter: twitter,
            youTube: youTube,
            whatsApp: whatsApp,
            tikTok: tikTok,
            gitHub: gitHub,
            reddit: reddit,
            snapchat: snapchat,
            spotify: spotify,
            pinterest: pinterest,
            telegram: telegram,
            medium: medium,
            upwork: upwork,
            fiverr: fiverr,

            //# used for filtering
            username: user.displayName,
          };
          setLoading(true);
          fetch(`${process.env.REACT_APP_API_INFO_UP}`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(updateInformation),
          })
            .then((res) => res.json())
            .then(() => {
              setLoading(false);
              toast.success("Profile Created Successfully");
              navigate("/updated-successfully");
            });
        }
      });
  };

  return (
    <div className="mb-8 md:mb-0">
      <img src={TopImage} alt="Top Banner" />

      <div className="my-10 md:my-20 w-11/12 mx-auto lg:mb-32">
        <div className="my-10">
          <form onSubmit={handleUpdateProfile}>
            <div className="mb-5">
              <div data-aos="zoom-in" data-aos-duration="2000">
                <h2 className="font-bold text-primary text-2xl uppercase mb-4 text-center">
                  Personal Information
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1 mb-3 md:mb-0">
                  <CgProfile className="text-xl text-info font-extrabold" />

                  <input
                    className="pl-2 outline-none border-none mx-1"
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Full Name"
                    required
                  ></input>
                </div>

                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1">
                  <MdLocationPin className="text-xl text-info font-extrabold" />
                  <input
                    className="pl-2 outline-none border-none"
                    type="text"
                    name="location"
                    id="location"
                    placeholder="Address ( City, Country )"
                  ></input>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1 mb-3 md:mb-0">
                  <MdOutlineTagFaces className="text-xl text-info font-extrabold" />
                  <input
                    className="pl-2 outline-none border-none mx-1"
                    type="text"
                    name="aboutYourself"
                    id="aboutYourself"
                    placeholder="About Yourself"
                  ></input>
                </div>

                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1">
                  <MdWorkOutline className="text-xl text-info font-extrabold" />
                  <input
                    className="pl-2 outline-none border-none"
                    type="text"
                    name="designation"
                    id="designation"
                    placeholder="Designation"
                  ></input>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1 mb-3 md:mb-0">
                  <IoMdCall className="text-xl text-info font-extrabold" />
                  <input
                    className="pl-2 outline-none border-none mx-1"
                    type="text"
                    name="contactNumber"
                    id="contactNumber"
                    placeholder="Contact Number"
                    required
                  ></input>
                </div>

                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1">
                  <BsGlobe className="text-xl text-info font-extrabold" />
                  <input
                    className="pl-2 outline-none border-none"
                    type="text"
                    name="websiteAddress"
                    id="websiteAddress"
                    placeholder=" Website Address"
                  ></input>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
                <div className="text-center p-3 rounded-2xl border-2 imageFile">
                  <label for="inputTag" className="cursor-pointer text-info">
                    Profile Photo{" "}
                    <span className="text-red-600">( Required )</span> <br />
                    <input
                      id="inputTag"
                      type="file"
                      name="image"
                      className="upload-box"
                    />
                    <br />
                    <span className="text-primary"></span>
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <div data-aos="zoom-in" data-aos-duration="2000">
                <h2 className="font-bold text-primary text-2xl uppercase mt-10 mb-4 text-center">
                  Social Information
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1 mb-3 md:mb-0">
                  <RiFacebookFill className="text-xl text-info font-extrabold" />
                  <input
                    className="pl-2 outline-none border-none mx-1"
                    type="text"
                    name="facebook"
                    id="facebook"
                    placeholder="Facebook Profile URL"
                  ></input>
                </div>

                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1">
                  <AiOutlineInstagram className="text-xl text-info font-extrabold" />
                  <input
                    className="pl-2 outline-none border-none"
                    type="text"
                    name="instagram"
                    id="instagram"
                    placeholder="Instagram Profile URL"
                  ></input>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1 mb-3 md:mb-0">
                  <FaLinkedinIn className="text-xl text-info font-extrabold" />
                  <input
                    className="pl-2 outline-none border-none mx-1"
                    type="text"
                    name="linkedIn"
                    id="linkedIn"
                    placeholder="LinkedIn Profile URL"
                  ></input>
                </div>

                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1">
                  <BsTwitter className="text-xl text-info font-extrabold" />
                  <input
                    className="pl-2 outline-none border-none"
                    type="text"
                    name="twitter"
                    id="twitter"
                    placeholder="Twitter Profile URL"
                  ></input>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1 mb-3 md:mb-0">
                  <BsYoutube className="text-xl text-info font-extrabold" />
                  <input
                    className="pl-2 outline-none border-none mx-1"
                    type="text"
                    name="youTube"
                    id="youTube"
                    placeholder="YouTube Channel URL"
                  ></input>
                </div>

                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1">
                  <BsWhatsapp className="text-xl text-info font-extrabold" />
                  <input
                    className="pl-2 outline-none border-none"
                    type="text"
                    name="whatsApp"
                    id="whatsApp"
                    placeholder="WhatsApp Number"
                  ></input>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1 mb-3 md:mb-0">
                  <FaTiktok className="text-xl text-info font-extrabold" />
                  <input
                    className="pl-2 outline-none border-none mx-1"
                    type="text"
                    name="tikTok"
                    id="tikTok"
                    placeholder="TikTok Profile URL"
                  ></input>
                </div>

                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1">
                  <AiOutlineGithub className="text-xl text-info font-extrabold" />
                  <input
                    className="pl-2 outline-none border-none"
                    type="text"
                    name="gitHub"
                    id="gitHub"
                    placeholder="GitHub Profile URL"
                  ></input>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1 mb-3 md:mb-0">
                  <GrReddit className="text-xl text-info font-extrabold" />
                  <input
                    className="pl-2 outline-none border-none mx-1"
                    type="text"
                    name="reddit"
                    id="reddit"
                    placeholder="Reddit Profile URL"
                  ></input>
                </div>

                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1">
                  <BsSnapchat className="text-xl text-info font-extrabold" />
                  <input
                    className="pl-2 outline-none border-none"
                    type="text"
                    name="snapchat"
                    id="snapchat"
                    placeholder="Snapchat Profile URL"
                  ></input>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1 mb-3 md:mb-0">
                  <BsSpotify className="text-xl text-info font-extrabold" />
                  <input
                    className="pl-2 outline-none border-none mx-1"
                    type="text"
                    name="spotify"
                    id="spotify"
                    placeholder="Spotify Profile URL"
                  ></input>
                </div>

                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1">
                  <BsPinterest className="text-xl text-info font-extrabold" />
                  <input
                    className="pl-2 outline-none border-none"
                    type="text"
                    name="pinterest"
                    id="pinterest"
                    placeholder="Pinterest Profile URL"
                  ></input>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1 mb-3 md:mb-0">
                  <BsTelegram className="text-xl text-info font-extrabold" />
                  <input
                    className="pl-2 outline-none border-none mx-1"
                    type="text"
                    name="telegram"
                    id="telegram"
                    placeholder="Telegram Username"
                  ></input>
                </div>

                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1">
                  <AiFillMediumCircle className="text-xl text-info font-extrabold" />
                  <input
                    className="pl-2 outline-none border-none"
                    type="text"
                    name="medium"
                    id="medium"
                    placeholder="Medium Profile URL"
                  ></input>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1 mb-3 md:mb-0">
                  <SiUpwork className="text-xl text-info font-extrabold" />
                  <input
                    className="pl-2 outline-none border-none mx-1"
                    type="text"
                    name="upwork"
                    id="upwork"
                    placeholder="Upwork Profile URL"
                  ></input>
                </div>

                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1">
                  <SiFiverr className="text-xl text-info font-extrabold" />
                  <input
                    className="pl-2 outline-none border-none"
                    type="text"
                    name="fiverr"
                    id="fiverr"
                    placeholder="Fiverr Profile URL"
                  ></input>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary my-4 w-full rounded-2xl font-bold text-white shadow-xl hover:bg-black"
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
                "Update Information"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
