import React from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";
const Home = () => {
  return (
    <div>
      <h1>This is a home page</h1>
      <MessengerCustomerChat
        pageId="103839155949753"
        appId="565056462228528"
        // htmlRef="<REF_STRING>"
      />
    </div>
  );
};

export default Home;
