import React from "react";
import Info1 from "../../Assets/Website Related Items/info1.png";
import Info2 from "../../Assets/Website Related Items/info2.png";
const Information = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2  flex-col-reverse bg-black px-8 md:px-12 lg:px-20 pt-20 md:pt-20 lg:py-20">
        <div className="my-auto">
          <h2 className="text-2xl md:text-4xl lg:text-7xl font-bold text-left md:text-left">
            Easiest way <br /> to connect <br /> with people
          </h2>
          <div className="pr-0 md:pr-7 lg:pr-64">
            <p className="text-xs md:text-xs lg:text-base font-medium text-gray-300 py-3 md:py-4 lg:py-7 text-left md:text-left">
              Connect with people wherever you go. Enable the NFC and everything
              you need to tap the card, this dashboard will be on the phone.
            </p>
          </div>
        </div>
        <img className="row-start-1 md:row-auto" src={Info1} alt="" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 flex-col-reverse bg-black px-8 md:px-12 lg:px-20 py-10 md:14 lg:py-20">
        <img src={Info2} alt="" />

        <div className="my-auto text-right">
          <h2 className="text-2xl md:text-4xl lg:text-7xl font-bold text-right md:text-right lg:mt-5 md:mt-0">
            Be Unique
          </h2>
          <div className="pl-0  md:pl-7 lg:pl-64">
            <p className="text-xs md:text-xs lg:text-base font-medium text-gray-300 py-3 md:py-4 lg:py-7 text-right md:text-right">
              Save contact to other phone just with a tap. Clickable social
              media links. Connect easily.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
