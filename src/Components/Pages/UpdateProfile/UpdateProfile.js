import React, { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import TopImage from "../../Assets/Website Related Items/top.jpg";
const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  // fetch("http://localhost:5000/users")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
  console.log(user);

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

    const updateInformation = {
      fullName: fullName,
      email: user.email,
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

      //# used for filtering
      username: user.displayName,
    };

    fetch("http://localhost:5000/updateInformation", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateInformation),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <img src={TopImage} alt="Top Banner" />

      <div className="my-10 md:my-20 w-11/12 mx-auto">
        <h2 className="text-primary text-3xl font-bold text-center uppercase">
          Update Profile
        </h2>

        <div className="my-10">
          <form onSubmit={handleUpdateProfile}>
            <div className="mb-5">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-black ml-2">
                  Personal Information :
                </h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1 mb-3 md:mb-0">
                  <input
                    className="pl-2 outline-none border-none mx-1"
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Full Name"
                  ></input>
                </div>

                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1">
                  <input
                    className="pl-2 outline-none border-none"
                    type="text"
                    name="location"
                    id="location"
                    placeholder="Location ( State, City ) "
                  ></input>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1 mb-3 md:mb-0">
                  <input
                    className="pl-2 outline-none border-none mx-1"
                    type="text"
                    name="aboutYourself"
                    id="aboutYourself"
                    placeholder="About Yourself"
                  ></input>
                </div>

                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1">
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
                  <input
                    className="pl-2 outline-none border-none mx-1"
                    type="text"
                    name="contactNumber"
                    id="contactNumber"
                    placeholder="Contact Number"
                  ></input>
                </div>

                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1">
                  <input
                    className="pl-2 outline-none border-none"
                    type="text"
                    name="websiteAddress"
                    id="websiteAddress"
                    placeholder="Website Address"
                  ></input>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-black ml-2">
                  Social Information :
                </h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1 mb-3 md:mb-0">
                  <input
                    className="pl-2 outline-none border-none mx-1"
                    type="text"
                    name="facebook"
                    id="facebook"
                    placeholder="Facebook"
                  ></input>
                </div>

                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1">
                  <input
                    className="pl-2 outline-none border-none"
                    type="text"
                    name="instagram"
                    id="instagram"
                    placeholder="Instagram"
                  ></input>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1 mb-3 md:mb-0">
                  <input
                    className="pl-2 outline-none border-none mx-1"
                    type="text"
                    name="linkedIn"
                    id="linkedIn"
                    placeholder="LinkedIn"
                  ></input>
                </div>

                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1">
                  <input
                    className="pl-2 outline-none border-none"
                    type="text"
                    name="twitter"
                    id="twitter"
                    placeholder="Twitter"
                  ></input>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1 mb-3 md:mb-0">
                  <input
                    className="pl-2 outline-none border-none mx-1"
                    type="text"
                    name="youTube"
                    id="youTube"
                    placeholder="YouTube"
                  ></input>
                </div>

                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1">
                  <input
                    className="pl-2 outline-none border-none"
                    type="text"
                    name="whatsApp"
                    id="whatsApp"
                    placeholder="WhatsApp"
                  ></input>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1 mb-3 md:mb-0">
                  <input
                    className="pl-2 outline-none border-none mx-1"
                    type="text"
                    name="tikTok"
                    id="tikTok"
                    placeholder="TikTok"
                  ></input>
                </div>

                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mx-1">
                  <input
                    className="pl-2 outline-none border-none"
                    type="text"
                    name="gitHub"
                    id="gitHub"
                    placeholder="GitHub"
                  ></input>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary my-4 w-full rounded-2xl font-bold text-white"
            >
              SIGNUP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
