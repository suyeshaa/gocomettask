import React from "react";
import { useLocation } from "react-router";

const Wishlist = () => {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  return (
    <div>
      {data.map((el) => {
        return (
          <div className="box">
            <div>{el.brand}</div>
            <div>{el.name}</div>
            <div>{el.price}</div>
            <div>{el.originalPrice}</div>
            <div>{el.discount}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Wishlist;
