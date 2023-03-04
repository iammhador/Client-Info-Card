import React, { useContext, useEffect, useState } from "react";
import TopImage from "../../Assets/Website Related Items/top.jpg";
import { ThreeDots } from "react-loader-spinner";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";

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

//# AOS :
import AOS from "aos";
import "aos/dist/aos.css";
const EditDetails = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);
  //# Information Collect From UseLoaderData:
  const {
    fullName,
    location,
    aboutYourself,
    designation,
    contactNumber,
    websiteAddress,
    facebook,
    instagram,
    linkedIn,
    twitter,
    youTube,
    whatsApp,
    tikTok,
    gitHub,
    reddit,
    snapchat,
    spotify,
    pinterest,
    telegram: updatedTelegram,
    medium: updatedMedium,
    upwork,
    fiverr,
  } = useLoaderData()[0];

  const handleEditDetails = (e) => {
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

    //# If Successfully Upload Profile Picture, Then Only Other's Data Will Go To Server:
    const updateInformation = {
      fullName: fullName,
      location: location,
      aboutYourself: aboutYourself,
      designation: designation,
      contactNumber: contactNumber,
      websiteAddress: websiteAddress,
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
    };

    setLoading(true);

    fetch(
      `https://infocard-zeta.vercel.app/updateInformation?username=${user?.displayName}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(updateInformation),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        navigate("/updated-successfully");
        toast.success("Profile Edited Successfully");
      });
  };
  return (
    <div>
      <div className="mb-28 md:mb-0">
        <img src={TopImage} alt="Top Banner" />

        <div className="my-10 md:my-20 w-11/12 mx-auto lg:mb-32">
          <div className="my-10">
            <form onSubmit={handleEditDetails}>
              <div className="mb-5">
                <div data-aos="zoom-in" data-aos-duration="2000">
                  <h2 className="font-bold text-primary text-2xl uppercase mb-4 text-center">
                    Personal Information
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
                  <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1 mb-3 md:mb-0">
                    <CgProfile
                      className={`text-xl ${
                        fullName ? "text-primary" : "text-info"
                      } font-extrabold`}
                    />

                    <input
                      className="pl-2 text-primary outline-none  border-none mx-1"
                      type="text"
                      name="fullName"
                      id="fullName"
                      placeholder="Full Name"
                      defaultValue={fullName && fullName}
                    ></input>
                  </div>

                  <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1">
                    <MdLocationPin
                      className={`text-xl ${
                        location ? "text-primary" : "text-info"
                      } font-extrabold`}
                    />
                    <input
                      className="pl-2 text-primary outline-none border-none"
                      type="text"
                      name="location"
                      id="location"
                      placeholder="Address (City, Country)"
                      defaultValue={location && location}
                    ></input>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
                  <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1 mb-3 md:mb-0">
                    <MdOutlineTagFaces
                      className={`text-xl ${
                        aboutYourself ? "text-primary" : "text-info"
                      } font-extrabold`}
                    />
                    <input
                      className="pl-2 text-primary outline-none  border-none mx-1"
                      type="text"
                      name="aboutYourself"
                      id="aboutYourself"
                      placeholder="About Yourself"
                      defaultValue={aboutYourself && aboutYourself}
                    ></input>
                  </div>

                  <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1">
                    <MdWorkOutline
                      className={`text-xl ${
                        designation ? "text-primary" : "text-info"
                      } font-extrabold`}
                    />
                    <input
                      className="pl-2 text-primary outline-none border-none"
                      type="text"
                      name="designation"
                      id="designation"
                      placeholder="Designation"
                      defaultValue={designation && designation}
                    ></input>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
                  <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1 mb-3 md:mb-0">
                    <IoMdCall
                      className={`text-xl ${
                        contactNumber ? "text-primary" : "text-info"
                      } font-extrabold`}
                    />
                    <input
                      className="pl-2 text-primary outline-none  border-none mx-1"
                      type="text"
                      name="contactNumber"
                      id="contactNumber"
                      placeholder="Contact Number"
                      defaultValue={contactNumber && contactNumber}
                    ></input>
                  </div>

                  <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1">
                    <BsGlobe
                      className={`text-xl ${
                        websiteAddress ? "text-primary" : "text-info"
                      } font-extrabold`}
                    />
                    <input
                      className="pl-2 text-primary outline-none border-none"
                      type="text"
                      name="websiteAddress"
                      id="websiteAddress"
                      placeholder="Website Address"
                      defaultValue={websiteAddress && websiteAddress}
                    ></input>
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
                    <RiFacebookFill
                      className={`text-xl ${
                        facebook ? "text-primary" : "text-info"
                      } font-extrabold`}
                    />
                    <input
                      className="pl-2 text-primary outline-none  border-none mx-1"
                      type="text"
                      name="facebook"
                      id="facebook"
                      placeholder="Facebook Profile URL"
                      defaultValue={facebook && facebook}
                    ></input>
                  </div>

                  <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1">
                    <AiOutlineInstagram
                      className={`text-xl ${
                        instagram ? "text-primary" : "text-info"
                      } font-extrabold`}
                    />
                    <input
                      className="pl-2 text-primary outline-none border-none"
                      type="text"
                      name="instagram"
                      id="instagram"
                      placeholder="Instagram Profile URL"
                      defaultValue={instagram && instagram}
                    ></input>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
                  <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1 mb-3 md:mb-0">
                    <FaLinkedinIn
                      className={`text-xl ${
                        linkedIn ? "text-primary" : "text-info"
                      } font-extrabold`}
                    />
                    <input
                      className="pl-2 text-primary outline-none  border-none mx-1"
                      type="text"
                      name="linkedIn"
                      id="linkedIn"
                      placeholder="LinkedIn Profile URL"
                      defaultValue={linkedIn && linkedIn}
                    ></input>
                  </div>

                  <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1">
                    <BsTwitter
                      className={`text-xl ${
                        twitter ? "text-primary" : "text-info"
                      } font-extrabold`}
                    />
                    <input
                      className="pl-2 text-primary outline-none border-none"
                      type="text"
                      name="twitter"
                      id="twitter"
                      placeholder="Twitter Profile URL"
                      defaultValue={twitter && twitter}
                    ></input>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
                  <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1 mb-3 md:mb-0">
                    <BsYoutube
                      className={`text-xl ${
                        youTube ? "text-primary" : "text-info"
                      } font-extrabold`}
                    />
                    <input
                      className="pl-2 text-primary outline-none  border-none mx-1"
                      type="text"
                      name="youTube"
                      id="youTube"
                      placeholder="YouTube Channel URL"
                      defaultValue={youTube && youTube}
                    ></input>
                  </div>

                  <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1">
                    <BsWhatsapp
                      className={`text-xl ${
                        whatsApp ? "text-primary" : "text-info"
                      } font-extrabold`}
                    />
                    <input
                      className="pl-2 text-primary outline-none border-none"
                      type="text"
                      name="whatsApp"
                      id="whatsApp"
                      placeholder="WhatsApp Number"
                      defaultValue={whatsApp && whatsApp}
                    ></input>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
                  <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1 mb-3 md:mb-0">
                    <FaTiktok
                      className={`text-xl ${
                        tikTok ? "text-primary" : "text-info"
                      } font-extrabold`}
                    />
                    <input
                      className="pl-2 text-primary outline-none  border-none mx-1"
                      type="text"
                      name="tikTok"
                      id="tikTok"
                      placeholder="TikTok Profile URL"
                      defaultValue={tikTok && tikTok}
                    ></input>
                  </div>

                  <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1">
                    <AiOutlineGithub
                      className={`text-xl ${
                        gitHub ? "text-primary" : "text-info"
                      } font-extrabold`}
                    />
                    <input
                      className="pl-2 text-primary outline-none border-none"
                      type="text"
                      name="gitHub"
                      id="gitHub"
                      placeholder="GitHub Profile URL"
                      defaultValue={gitHub && gitHub}
                    ></input>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
                  <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1 mb-3 md:mb-0">
                    <GrReddit
                      className={`text-xl ${
                        reddit ? "text-primary" : "text-info"
                      } font-extrabold`}
                    />
                    <input
                      className="pl-2 text-primary outline-none  border-none mx-1"
                      type="text"
                      name="reddit"
                      id="reddit"
                      placeholder="Reddit Profile URL"
                      defaultValue={reddit && reddit}
                    ></input>
                  </div>

                  <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1">
                    <BsSnapchat
                      className={`text-xl ${
                        snapchat ? "text-primary" : "text-info"
                      } font-extrabold`}
                    />
                    <input
                      className="pl-2 text-primary outline-none border-none"
                      type="text"
                      name="snapchat"
                      id="snapchat"
                      placeholder="Snapchat Profile URL"
                      defaultValue={snapchat && snapchat}
                    ></input>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
                  <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1 mb-3 md:mb-0">
                    <BsSpotify
                      className={`text-xl ${
                        spotify ? "text-primary" : "text-info"
                      } font-extrabold`}
                    />
                    <input
                      className="pl-2 text-primary outline-none border-none mx-1"
                      type="text"
                      name="spotify"
                      id="spotify"
                      placeholder="Spotify Profile URL"
                      defaultValue={spotify && spotify}
                    ></input>
                  </div>

                  <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1">
                    <BsPinterest
                      className={`text-xl ${
                        pinterest ? "text-primary" : "text-info"
                      } font-extrabold`}
                    />
                    <input
                      className="pl-2 text-primary outline-none border-none"
                      type="text"
                      name="pinterest"
                      id="pinterest"
                      placeholder="Pinterest Profile URL"
                      defaultValue={pinterest && pinterest}
                    ></input>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
                  <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1 mb-3 md:mb-0">
                    <BsTelegram
                      className={`text-xl ${
                        updatedTelegram ? "text-primary" : "text-info"
                      } font-extrabold`}
                    />
                    <input
                      className="pl-2 text-primary outline-none border-none mx-1"
                      type="text"
                      name="telegram"
                      id="telegram"
                      placeholder="Telegram Username"
                      defaultValue={updatedTelegram && updatedTelegram}
                    ></input>
                  </div>

                  <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1">
                    <AiFillMediumCircle
                      className={`text-xl ${
                        updatedMedium ? "text-primary" : "text-info"
                      } font-extrabold`}
                    />
                    <input
                      className="pl-2 text-primary outline-none border-none"
                      type="text"
                      name="medium"
                      id="medium"
                      placeholder="Medium Profile URL"
                      defaultValue={updatedMedium && updatedMedium}
                    ></input>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
                  <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1 mb-3 md:mb-0">
                    <SiUpwork
                      className={`text-xl ${
                        upwork ? "text-primary" : "text-info"
                      } font-extrabold`}
                    />
                    <input
                      className="pl-2 text-primary outline-none border-none mx-1"
                      type="text"
                      name="upwork"
                      id="upwork"
                      placeholder="Upwork Profile URL"
                      defaultValue={upwork && upwork}
                    ></input>
                  </div>

                  <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1">
                    <SiFiverr
                      className={`text-xl ${
                        fiverr ? "text-primary" : "text-info"
                      } font-extrabold`}
                    />
                    <input
                      className="pl-2 text-primary outline-none border-none"
                      type="text"
                      name="fiverr"
                      id="fiverr"
                      placeholder="Fiverr Profile URL"
                      defaultValue={fiverr && fiverr}
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
    </div>
  );
};

export default EditDetails;
