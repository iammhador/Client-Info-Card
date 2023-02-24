import React from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";
import Banner from "./Banner";
const Home = () => {
  return (
    <div className="mb-20">
      <Banner />
      <MessengerCustomerChat
        pageId="103839155949753"
        appId="565056462228528"
        // htmlRef="<REF_STRING>"
      />
    </div>
  );
};

export default Home;
