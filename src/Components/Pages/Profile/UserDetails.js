import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import VCard from "vcard-creator";
import download from "downloadjs";
import TopImage from "../../Assets/Website Related Items/top.jpg";
import ProfileImage from "../../Assets/profile.png";
import { useLoaderData } from "react-router";

//# Personal Information Icons:
import { BsGlobe } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";

//# Social Media Icons:
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiLinkedinFill } from "react-icons/ri";
import { SiTwitter } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { GrReddit } from "react-icons/gr";
import { BsSpotify } from "react-icons/bs";
import { BsSnapchat } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { AiFillMediumCircle } from "react-icons/ai";
import { SiUpwork } from "react-icons/si";
import { SiFiverr } from "react-icons/si";
// import AuthProvider from "../../../AuthProvider/AuthProvider";

const UserDetails = () => {
  //# User Information:
  const {
    fullName,
    email,
    image,
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
    telegram,
    medium,
    upwork,
    fiverr,
  } = useLoaderData()[0];

  //# Social Slider:
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
    },
  };

  const visitingCard = () => {
    //! create a new vCard
    const myVCard = new VCard();
    myVCard
      .addName(`${fullName}`)
      .addJobtitle(`${designation}`)
      .addEmail(`${email}`)
      .addPhoneNumber(`${contactNumber}`)
      .addAddress(null, null, "", "", "", "", `${location}`)
      .addURL(`${websiteAddress}`);
    // .addPhoto(image, "JPEG");

    download(myVCard.toString(), `${fullName}.vcf`);
  };

  return (
    <div>
      <div>
        <div className="top-image">
          <img src={TopImage} alt="Top" />
        </div>

        {image ? (
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-white ring-offset-secondary-100 ring-offset-2 absolute -top-16 left-8 md:left-16 lg:left-20">
              <img src={image ? image : ProfileImage} alt="Avater" />
            </div>
          </div>
        ) : null}

        <div className="mt-14 w-5/6 mx-auto font-rubik">
          {fullName ? (
            <h3 className="text-xl md:text-4xl text-neutral font-semibold uppercase ">
              {fullName}
            </h3>
          ) : null}

          {designation ? (
            <h5 className="text-sm md:text-2xl text-secondary font-medium uppercase">
              {designation}
            </h5>
          ) : null}
          <div className="my-8">
            <div className="grid grid-cols-1">
              <button
                onClick={visitingCard}
                className="bg-primary text-sm md:text-lg font-medium text-accent p-3 mr-2 rounded-xl uppercase hover:bg-neutral shadow-2xl"
              >
                Save Contact
              </button>

              {/* <button className="bg-primary text-base font-medium text-accent p-3 rounded-xl uppercase">
                Connect
              </button> */}
            </div>
          </div>
          <div className="my-8">
            <div className="my-4">
              {email ? (
                <a
                  // href="mailto:iammhador@gmail.com"
                  href={`mailto:${email}`}
                  target="a_blank"
                  className="flex my-auto mb-4"
                >
                  <MdEmail className="text-5xl md:text-7xl md:p-5 rounded-full bg-black text-white p-3" />
                  <div className="ml-3">
                    <h4 className="text-base md:text-2xl text-neutral font-semibold">
                      {email}
                    </h4>
                    <p className="text-secondary text-xs md:text-lg font-medium">
                      Email
                    </p>
                  </div>
                </a>
              ) : null}

              {contactNumber ? (
                <a
                  href={`tel:+88${contactNumber}`}
                  target="a_blank"
                  className="flex my-auto mb-4"
                >
                  <MdCall className="text-5xl md:text-7xl md:p-5 rounded-full bg-black text-white p-3" />
                  <div className="ml-3">
                    <h4 className="text-base md:text-2xl text-neutral font-semibold">
                      {contactNumber}
                    </h4>
                    <p className="text-secondary text-xs md:text-lg font-medium">
                      Cell Phone
                    </p>
                  </div>
                </a>
              ) : null}

              {websiteAddress ? (
                <a
                  href={websiteAddress}
                  target="a_blank"
                  className="flex my-auto mb-4"
                >
                  <BsGlobe className="text-5xl md:text-7xl md:p-5 rounded-full bg-black text-white p-3" />
                  <div className="ml-3">
                    <h4 className="text-base md:text-2xl text-neutral font-semibold">
                      {websiteAddress}
                    </h4>
                    <p className="text-secondary text-xs md:text-lg font-medium">
                      Website
                    </p>
                  </div>
                </a>
              ) : null}

              {location ? (
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${location}`}
                  target="a_blank"
                  className="flex my-auto mb-4"
                >
                  <SiGooglemaps className="text-5xl md:text-7xl md:p-5 rounded-full bg-black text-white p-3" />
                  <div className="ml-3">
                    <h4 className="text-base md:text-2xl text-neutral font-semibold">
                      {location}
                    </h4>
                    <p className="text-secondary text-xs md:text-lg font-medium">
                      Address
                    </p>
                  </div>
                </a>
              ) : null}
            </div>
          </div>

          {aboutYourself ? (
            <div className="my-8">
              {/* <h3 className="text-xl font-bold text-secondary tracking-wide">
                About
              </h3> */}

              <div>
                <p className="text-secondary font-medium mt-2 text-justify">
                  {aboutYourself}
                </p>
              </div>
            </div>
          ) : null}

          <div className="mt-8">
            <hr />
          </div>
          <div className="my-8">
            <Carousel
              responsive={responsive}
              removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
            >
              {facebook ? (
                <div>
                  <a
                    href={facebook}
                    target="a_blank"
                    className="flex my-auto mb-4"
                  >
                    <FaFacebookF className="text-5xl rounded-full bg-black text-white p-3" />
                  </a>
                </div>
              ) : null}

              {instagram ? (
                <div>
                  <a
                    href={instagram}
                    target="a_blank"
                    className="flex my-auto mb-4"
                  >
                    <AiFillInstagram className="text-5xl rounded-full bg-black text-white p-3" />
                  </a>
                </div>
              ) : null}

              {whatsApp ? (
                <div>
                  <a
                    href={`https://wa.me/+88${contactNumber}`}
                    target="a_blank"
                    className="flex my-auto mb-4"
                  >
                    <IoLogoWhatsapp className="text-5xl rounded-full bg-black text-white p-3" />
                  </a>
                </div>
              ) : null}

              {linkedIn ? (
                <div>
                  <a
                    href={linkedIn}
                    target="a_blank"
                    className="flex my-auto mb-4"
                  >
                    <RiLinkedinFill className="text-5xl rounded-full bg-black text-white p-3" />
                  </a>
                </div>
              ) : null}

              {twitter ? (
                <div>
                  <a
                    href={twitter}
                    target="a_blank"
                    className="flex my-auto mb-4"
                  >
                    <SiTwitter className="text-5xl rounded-full bg-black text-white p-3" />
                  </a>
                </div>
              ) : null}

              {tikTok ? (
                <div>
                  <a
                    href={tikTok}
                    target="a_blank"
                    className="flex my-auto mb-4"
                  >
                    <FaTiktok className="text-5xl rounded-full bg-black text-white p-3" />
                  </a>
                </div>
              ) : null}

              {youTube ? (
                <div>
                  <a
                    href={youTube}
                    target="a_blank"
                    className="flex my-auto mb-4"
                  >
                    <FaYoutube className="text-5xl rounded-full bg-black text-white p-3" />
                  </a>
                </div>
              ) : null}

              {gitHub ? (
                <div>
                  <a
                    href={gitHub}
                    target="a_blank"
                    className="flex my-auto mb-4"
                  >
                    <BsGithub className="text-5xl rounded-full bg-black text-white p-3" />
                  </a>
                </div>
              ) : null}

              {reddit ? (
                <div>
                  <a
                    href={reddit}
                    target="a_blank"
                    className="flex my-auto mb-4"
                  >
                    <GrReddit className="text-5xl rounded-full bg-black text-white p-3" />
                  </a>
                </div>
              ) : null}

              {snapchat ? (
                <div>
                  <a
                    href={snapchat}
                    target="a_blank"
                    className="flex my-auto mb-4"
                  >
                    <BsSnapchat className="text-5xl rounded-full bg-black text-white p-3" />
                  </a>
                </div>
              ) : null}

              {spotify ? (
                <div>
                  <a
                    href={spotify}
                    target="a_blank"
                    className="flex my-auto mb-4"
                  >
                    <BsSpotify className="text-5xl rounded-full bg-black text-white p-3" />
                  </a>
                </div>
              ) : null}

              {pinterest ? (
                <div>
                  <a
                    href={pinterest}
                    target="a_blank"
                    className="flex my-auto mb-4"
                  >
                    <BsPinterest className="text-5xl rounded-full bg-black text-white p-3" />
                  </a>
                </div>
              ) : null}

              {telegram ? (
                <div>
                  <a
                    href={`https://t.me/${telegram}`}
                    target="a_blank"
                    className="flex my-auto mb-4"
                  >
                    <BsTelegram className="text-5xl rounded-full bg-black text-white p-3" />
                  </a>
                </div>
              ) : null}

              {medium ? (
                <div>
                  <a
                    href={medium}
                    target="a_blank"
                    className="flex my-auto mb-4"
                  >
                    <AiFillMediumCircle className="text-5xl rounded-full bg-black text-white p-3" />
                  </a>
                </div>
              ) : null}

              {upwork ? (
                <div>
                  <a
                    href={upwork}
                    target="a_blank"
                    className="flex my-auto mb-4"
                  >
                    <SiUpwork className="text-5xl rounded-full bg-black text-white p-3" />
                  </a>
                </div>
              ) : null}

              {fiverr ? (
                <div>
                  <a
                    href={fiverr}
                    target="a_blank"
                    className="flex my-auto mb-4"
                  >
                    <SiFiverr className="text-5xl rounded-full bg-black text-white p-3" />
                  </a>
                </div>
              ) : null}
            </Carousel>
          </div>
        </div>
        <footer className="my-4">
          <p className="text-center text-sm text-secondary font-medium capitalize">
            All right reserved by{" "}
            <a className="text-primary" href="https://infocard.online/">
              infocard
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default UserDetails;
