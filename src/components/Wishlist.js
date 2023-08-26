// import React from "react";
// import { useLocation } from "react-router";

// const Wishlist = () => {
//   const location = useLocation();
//   const data = location.state;
//   console.log(data);
//   return (
//     <div>
//       {data.map((el) => {
//         return (
//           <div className="box">
//             <div>{el.brand}</div>
//             <div>{el.name}</div>
//             <div>{el.price}</div>
//             <div>{el.originalPrice}</div>
//             <div>{el.discount}</div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Wishlist;

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Nav from "./Nav";
import "./Main.css";
import { productData } from "../data";

const Wishlist = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const data = location.state;
  console.log(data);

  // go to details page
  const handleCardClick = (el) => {
    console.log(el);
    navigate(`/details/${el.key}`);
  };

  // getitems from local storage

  let wishlistedProducts = JSON.parse(sessionStorage.getItem("wishlistArr"));
  console.log(productData);

  // different approach
  // let wishlistedProducts;
  // wishlistedProducts = productData.filter((item) => item.wishlist === true);

  // console.log(wishlistedProducts);

  // hover

  return (
    <div className="main">
      <Nav />

      <div className="mainpt">
        <div className="wlist">
          My Wishlist
          {data.length ? (
            <span>{data.length} products</span>
          ) : (
            <span> 0 products</span>
          )}
        </div>
        <div className="mainpt4">
          {/* display card */}
          <div className="deets">
            {wishlistedProducts ? (
              wishlistedProducts.map((el) => {
                return (
                  <div className="card">
                    <div>
                      <div onClick={() => handleCardClick(el)}>
                        <img src={el.img} alt="img" />
                      </div>
                      <div className="info">
                        <div onClick={() => handleCardClick(el)}>
                          <div className="brand">{el.brand}</div>
                          <div className="name">{el.name}</div>
                        </div>

                        <div
                          className="card-price"
                          onClick={() => handleCardClick(el)}
                        >
                          <div className="price m-comp">Rs.{el.price}</div>
                          <div className="ogprice  m-comp">
                            Rs.{el.originalPrice}
                          </div>
                          <div className="disc  m-comp">({el.discount}OFF)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
