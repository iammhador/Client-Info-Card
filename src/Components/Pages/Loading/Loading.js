import React from "react";
// import { Discuss } from "react-loader-spinner";
import loader from "../../Assets/Website Related Items/favicon.png";
const Loading = () => {
  return (
    <div className="relative w-20 h-20">
      <img
        className="absolute top-0 bottom-0 right-0 left-0 m-auto"
        src={loader}
        alt=""
        // visible={true}
        // height="200px"
        // width="200px"
        // ariaLabel="comment-loading"
        // wrapperStyle={{}}
        // colors={["#13315C", "#13315C"]}
        // wrapperClass=" mx-auto h-screen -rotate-90 "
        // color="#13315C"
        // backgroundColor="#13315C"
      />
    </div>
  );
};

export default Loading;
