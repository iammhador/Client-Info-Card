import React from "react";
import AboutUs from "./AboutUs";
// import MessengerCustomerChat from "react-messenger-customer-chat";
import Banner from "./Banner";
import CreateYourCard from "./CreateYourCard";
import Footer from "./Footer";
import Information from "./Information";
const Home = () => {
  return (
    <div className="mb-0">
      <Banner />
      <Information />
      <AboutUs />
      <CreateYourCard />
      <Footer />
      {/* <MessengerCustomerChat
        pageId="103839155949753"
        appId="565056462228528"
        htmlRef="<REF_STRING>"
      /> */}
    </div>
  );
};

export default Home;
