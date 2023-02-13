import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import UserInfo from "../Pages/Profile/UserInfo";
import Profile from "../Layout/Profile";
import UserDetails from "../Pages/Profile/UserDetails";
import { async } from "@firebase/util";
import EditDetails from "../Pages/Profile/EditDetails";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";

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
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/update-profile",
        element: <UpdateProfile />,
      },
    ],
  },
  {
    path: "/profile",
    element: <Profile />,
    errorElement: <Error />,
    children: [
      {
        path: "/profile",
        element: <UserInfo />,
      },
      {
        path: "/profile/editdetails",
        element: <EditDetails />,
      },
    ],
  },
  {
    path: "/information/:username",
    element: <UserDetails />,
    errorElement: <Error />,
    loader: async ({ params }) => {
      return fetch(`http://localhost:5000/users?username=${params.username}`);
    },
  },
]);

export default Router;
