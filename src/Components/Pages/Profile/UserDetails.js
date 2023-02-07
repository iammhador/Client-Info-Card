import React from "react";
import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1>User Details</h1>
    </div>
  );
};

export default UserDetails;
