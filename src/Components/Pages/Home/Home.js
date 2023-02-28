import React from "react";
import AboutUs from "./AboutUs";
import MessengerCustomerChat from "react-messenger-customer-chat";
import Banner from "./Banner";
import CreateYourCard from "./CreateYourCard";
import Footer from "./Footer";
import Information from "./Information";
import ScrollToTop from "./ScrollToTop";

// import ScrollToTop from "react-scroll-to-top";
const Home = () => {
  return (
    <div className="mb-0">
      <Banner />
      <Information />
      <AboutUs />
      <CreateYourCard data-aos="fade-down" />
      <Footer />
      <ScrollToTop />
      {/* <ScrollToTop
        style={{
          position: "fixed",
          bottom: 100,
          left: 30,
          cursor: "pointer",
          transitionDuration: "0.9s",
          transitionTimingFunction: "linear",
          transitionDelay: "0.9s",
        }}
        showUnder={160}
      >
        <span>UP</span>
      </ScrollToTop> */}
      {/* <MessengerCustomerChat
        pageId="103839155949753"
        appId="565056462228528"
        htmlRef="<REF_STRING>"
      /> */}
    </div>
  );
};

export default Home;
