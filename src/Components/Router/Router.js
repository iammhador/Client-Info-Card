import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import UserDetails from "../Pages/Profile/UserDetails";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import EditDetails from "../Pages/Profile/EditDetails";
import Notify from "../Pages/Notification.js/Notify";
import PasswordReset from "../Pages/Password-reset/PasswordReset";
import Confirmation from "../Pages/Password-reset/Confirmation";
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
        path: "/password-reset",
        element: <PasswordReset></PasswordReset>,
      },
      {
        path: "/edit-profile/:username",
        element: <EditDetails />,
        loader: async ({ params }) => {
          return fetch(
            `https://infocard-zeta.vercel.app/updateInformation?username=${params.username}`
          );
        },
      },
      {
        path: "/:username",
        element: <UserDetails />,
        loader: async ({ params }) => {
          return fetch(
            `https://infocard-zeta.vercel.app/updateInformation?username=${params.username}`
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
    path: "/reset-password-confirmation",
    element: <Confirmation />,
    errorElement: <Error />,
    children: [
      {
        path: "/reset-password-confirmation",
        element: <Confirmation />,
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
      // {
      //   path: "/reset-password-confirmation",
      //   element: <Confirmation />,
      // },
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
]);

export default Router;
