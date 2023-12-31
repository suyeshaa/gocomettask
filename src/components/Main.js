import React, { useEffect, useState } from "react";
import { productData } from "../data";
import { useNavigate } from "react-router";
import Nav from "./Nav";
import "./Main.css";
import SideBar from "./SideBar";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";

const Main = () => {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);
  const [currData, setCurrData] = useState(productData);
  let wishlistArr = [];

  const chooseCurrData = (cdata) => {
    setCurrData(cdata);
  };

  useEffect(() => {
    console.log(currData);
  }, [currData]);

  // go to details page
  const handleCardClick = (el) => {
    console.log(el);
    navigate(`/details/${el.key}`);
  };

  // wishlist
  const wishlistHandler = (el) => {
    let wishlistVal = el.wishlist;
    console.log(el.wishlist);

    // const it = JSON.parse(localStorage.getItem("wishlisted"));
    // if (it && wishlist) {
    //   let items = [...it, wishlist];
    //   localStorage.setItem("wishlisted", JSON.stringify(items));
    // } else if (it == null && wishlist) {
    //   // let items = [bag];
    //   localStorage.setItem("wishlisted", JSON.stringify(wishlist));
    // }

    el.wishlist = !wishlistVal;
    // el.wishlist = !el.wishlist;
    console.log(el.wishlist);
    if (wishlist.includes(el)) {
      wishlistArr = wishlist.filter((item) => item.key !== el.key);
    } else {
      wishlistArr = [...wishlist, el];
    }
    console.log("wishlist", wishlistArr);
    setWishlist(wishlistArr);
    sessionStorage.setItem("wishlistArr", JSON.stringify(wishlistArr));
  };
  // sort
  const sortHandler = (e) => {
    let val = e.target.value;
    let prod = productData;
    let sortedProducts = [];

    if (val === "high") {
      sortedProducts = prod.sort((p1, p2) =>
        p1.price < p2.price ? 1 : p1.price > p2.price ? -1 : 0
      );
      // console.log(sortedProducts);
    } else if (val === "low") {
      sortedProducts = prod.sort((p1, p2) =>
        p1.price > p2.price ? 1 : p1.price < p2.price ? -1 : 0
      );
    } else {
      sortedProducts = productData;
    }
    // ... makes new reference
    setCurrData([...sortedProducts]);
    console.log(sortedProducts);
  };

  return (
    <div className="main">
      <Nav wishlistArr={wishlist} chooseCurrData={chooseCurrData} />
      <div className="mainpt">
        <div className="mainpt1">
          Home / Clothing / <span>Shirts</span>{" "}
        </div>
        <div className="mainpt2">
          Shirts For Men <span>- {currData.length} items</span>
        </div>
        {/* sort */}

        <div className="mainpt3">
          <div className="filter">FILTERS</div>
          <div className="sort select ">
            <span>Sort by :</span>
            <select onChange={sortHandler} className="sort-box" id="format">
              \
              <option className="optn" value="Recommended ">
                Recommended
              </option>
              <option className="optn" value="high">
                Price: High To Low
              </option>
              <option className="optn" value="low">
                Price: Low To High
              </option>
            </select>
          </div>
        </div>
        <div className="mainpt4">
          <div className="sidebar">
            <SideBar chooseCurrData={chooseCurrData} dt={currData} />
          </div>
          {/* display card */}
          <div className="deets">
            {currData.map((el) => {
              return (
                <div className="card">
                  <div>
                    <div onClick={() => handleCardClick(el)}>
                      <img src={el.img} alt="img" />
                    </div>
                    <div className="info">
                      <div
                        onClick={() => handleCardClick(el)}
                        className="main-name"
                      >
                        <div className="brand">{el.brand}</div>
                        <div className="name">{el.name}</div>
                      </div>

                      <div className="wishlist">
                        <button className onClick={() => wishlistHandler(el)}>
                          {!el.wishlist ? (
                            <div className="wishlisted-icon">
                              <BsHeartFill style={{ color: "red" }} />
                              <span>WISHLISTED</span>
                            </div>
                          ) : (
                            <div className="wishlist-icon">
                              <BsHeart />
                              <span>WISHLIST</span>
                            </div>
                          )}
                        </button>
                      </div>

                      <div
                        className="card-price"
                        onClick={() => handleCardClick(el)}
                      >
                        <div className="price-m-comp">Rs.{el.price}</div>
                        <div className="ogprice  m-comp">
                          Rs.{el.originalPrice}
                        </div>
                        <div className="disc  m-comp">({el.discount}OFF)</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
