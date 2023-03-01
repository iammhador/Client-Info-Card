import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
// import UserInfo from "../Pages/Profile/UserInfo";
// import Profile from "../Layout/Profile";
import UserDetails from "../Pages/Profile/UserDetails";
// import EditDetails from "../Pages/Profile/EditDetails";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
// import { Profiler } from "react";
import EditDetails from "../Pages/Profile/EditDetails";
import Notify from "../Pages/Notification.js/Notify";

const { createHashRouter } = require("react-router-dom");

const Router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Signup />,
      },

      {
        path: "/edit-profile/:username",
        element: <EditDetails />,
        loader: async ({ params }) => {
          return fetch(
            `http://localhost:5000/updateInformation?username=${params.username}`
          );
        },
      },
    ],
  },

  {
    path: "/update-profile",
    element: <UpdateProfile />,
    errorElement: <Error />,
    children: [
      {
        path: "/update-profile",
        element: <UpdateProfile />,
      },
    ],
  },

  {
    path: "/updated-successfully",
    element: <Notify />,
    errorElement: <Error />,
    children: [
      {
        path: "/updated-successfully",
        element: <Notify />,
      },
    ],
  },
  // {
  //   path: "/edit-profile",
  //   element: <EditDetails />,
  //   errorElement: <Error />,
  //   children: [
  //     {
  //       path: "/profile",
  //       element: <UserInfo />,
  //     },
  //     {
  //       path: "/edit-profile",
  //       element: <EditDetails />,
  //     },
  //   ],
  // },

  {
    path: "/profile/:username",
    element: <UserDetails />,
    errorElement: <Error />,
    loader: async ({ params }) => {
      return fetch(
        `http://localhost:5000/updateInformation?username=${params.username}`
      );
    },
  },
]);

export default Router;
