import React from "react";
import SVGImg from "../../Assets/Website Related Items/undraw_celebrating_rtuv.svg";

const Confirmation = () => {
  return (
    <div>
      <div className="text-center py-14 lg:py-36 w-5/6 mx-auto   my-16">
        <p className="text-black text-lg md:text-xl lg:text-2xl font-bold uppercase">
          Hello
        </p>
        <img src={SVGImg} alt="" className="mx-auto h-36 lg:h-52 my-5" />
        <p className="text-gray-400 px-5">
          Your password reset mail has been sended. To go to home page, Please{" "}
          <a href="/" className="text-primary font-medium text-lg underline">
            click
          </a>{" "}
          this here.
        </p>
      </div>
    </div>
  );
};

export default Confirmation;
