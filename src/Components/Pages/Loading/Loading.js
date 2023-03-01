import React from "react";
import { Discuss } from "react-loader-spinner";

const Loading = () => {
  return (
    <Discuss
      visible={true}
      height="200"
      width="200"
      ariaLabel="comment-loading"
      wrapperStyle={{}}
      colors={["#13315C", "#13315C"]}
      wrapperClass=" mx-auto h-screen -rotate-90 "
      color="#13315C"
      backgroundColor="#13315C"
    />
  );
};

export default Loading;
