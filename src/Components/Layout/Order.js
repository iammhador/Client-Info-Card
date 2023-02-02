import React from "react";
import { Outlet } from "react-router-dom";
import OrderNav from "../Shared/OrderNav";

const Order = () => {
  return (
    <div>
      <OrderNav />
      <Outlet />
    </div>
  );
};

export default Order;
