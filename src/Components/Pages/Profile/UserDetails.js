import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import VCard from "vcard-creator";
import download from "downloadjs";
import TopImage from "../../Assets/Website Related Items/top.jpg";
import ProfileImage from "../../Assets/iammhador.jpg";

//# Personal Information Icons:
import { AiOutlineMail } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { SiGooglemaps, SiNuke } from "react-icons/si";

//# Social Media Icons:
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiLinkedinFill } from "react-icons/ri";
import { SiTwitter } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { useLoaderData, useLocation } from "react-router";
// import AuthProvider from "../../../AuthProvider/AuthProvider";

const UserDetails = () => {
  // const { user } = useContext(AuthProvider);
  // console.log(user);

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
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
    },
  };

  const visitingCard = () => {
    //create a new vCard

    const myVCard = new VCard();

    myVCard
      .addName(`${fullName}`)
      .addJobtitle(`${designation}`)
      .addEmail(`${email}`)
      .addPhoneNumber(`${contactNumber}`)
      .addAddress(null, null, "", "", "", "", `${location}`)
      .addURL(`${websiteAddress}`);
    // .addPhoto(contactData.image.data, contactData.image.mime);
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
              <img src={ProfileImage} alt="Profile" />
            </div>
          </div>
        ) : null}

        <div className="mt-14 w-5/6 mx-auto">
          {fullName ? (
            <h3 className="text-2xl text-neutral font-bold ">{fullName}</h3>
          ) : null}

          {designation ? (
            <h5 className="text-lg text-secondary font-medium">
              {designation}
            </h5>
          ) : null}
          <div className="my-8">
            <div className="grid grid-cols-2">
              <button
                onClick={visitingCard}
                className="bg-primary text-base font-medium text-accent p-3 mr-2 rounded-xl uppercase"
              >
                Save Contact
              </button>

              <button className="bg-primary text-base font-medium text-accent p-3 rounded-xl uppercase">
                Connect
              </button>
            </div>
          </div>
          <div className="my-8">
            <div className="my-4">
              {email ? (
                <a
                  href="mailto:iammhador@gmail.com"
                  className="flex my-auto mb-4"
                >
                  <MdEmail className="text-5xl rounded-full bg-black text-white p-3" />
                  <div className="ml-3">
                    <h4 className="text-base text-secondary font-medium">
                      {email}
                    </h4>
                    <p className="text-secondary  text-xs">Email</p>
                  </div>
                </a>
              ) : null}

              {contactNumber ? (
                <a href="tel:+8801630995585" className="flex my-auto mb-4">
                  <MdCall className="text-5xl rounded-full bg-black text-white p-3" />
                  <div className="ml-3">
                    <h4 className="text-base text-secondary  font-medium">
                      {contactNumber}
                    </h4>
                    <p className="text-secondary text-xs">Cell Phone</p>
                  </div>
                </a>
              ) : null}

              {websiteAddress ? (
                <a
                  href="www.iammhador.com"
                  target="a_blank"
                  className="flex my-auto mb-4"
                >
                  <AiOutlineMail className="text-5xl rounded-full bg-black text-white p-3" />
                  <div className="ml-3">
                    <h4 className="text-base text-secondary font-medium">
                      {websiteAddress}
                    </h4>
                    <p className="text-secondary text-xs">Website</p>
                  </div>
                </a>
              ) : null}

              {location ? (
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${location}`}
                  target="a_blank"
                  className="flex my-auto mb-4"
                >
                  <SiGooglemaps className="text-5xl rounded-full bg-black text-white p-3" />
                  <div className="ml-3">
                    <h4 className="text-base text-secondary font-medium">
                      {location}
                    </h4>
                    <p className="text-secondary text-xs">Address</p>
                  </div>
                </a>
              ) : null}
            </div>
          </div>

          {aboutYourself ? (
            <div className="my-8">
              <h3 className="text-xl font-bold text-secondary tracking-wide">
                About
              </h3>

              <div>
                <p className="text-secondary mt-2 text-justify">
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
              removeArrowOnDeviceType={["tablet", "mobile"]}
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
                    href={whatsApp}
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
            </Carousel>
          </div>
        </div>
        <footer className="my-4">
          <p className="text-center text-sm text-secondary font-medium">
            All right reserved by{" "}
            <a href="https://infocard.online/">infocard</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default UserDetails;
