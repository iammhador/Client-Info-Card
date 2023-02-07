import React from "react";
import { Outlet } from "react-router-dom";
import ProfileNav from "../Shared/ProfileNav";

const Profile = () => {
  return (
    <div>
      <ProfileNav />
      <Outlet />
    </div>
  );
};

export default Profile;
