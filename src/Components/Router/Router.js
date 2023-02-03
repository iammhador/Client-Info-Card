import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Order from "../Layout/Order";
import OrderReq from "../Pages/Order/OrderReq";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";

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
    ],
  },
  {
    path: "/order",
    element: <Order />,
    errorElement: <Error />,
    children: [
      {
        path: "/order",
        element: <OrderReq />,
      },
    ],
  },
]);

export default Router;
