import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { productData } from "../data";
import { BsFillHandbagFill } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";

import Nav from "./Nav";
import "./Details.css";

const Details = () => {
  const { id } = useParams();
  let product = productData.filter((item) => item.key == id);
  product = product[0];

  const [size, setSize] = useState("");
  const [err, setErr] = useState(false);
  const [bag, setBag] = useState([]);

  let cartItems = [];

  const clickHandler = (e) => {
    setSize(e.target.value);
    setErr(false);
  };

  const bagHandler = () => {
    if (!size) {
      setErr(true);
    } else {
      cartItems = [...cartItems, product];
      // console.log(cart);
      setBag(product);
    }
  };

  useEffect(() => {
    const it = JSON.parse(localStorage.getItem("bagItems"));
    if (it && bag) {
      let items = [...it, bag];
      localStorage.setItem("bagItems", JSON.stringify(items));
    } else if (it == null && bag) {
      // let items = [bag];
      localStorage.setItem("bagItems", JSON.stringify(bag));
    }
  }, [bag]);

  return (
    <div>
      <Nav />
      <div className="mainpt1">
        Home / Clothing / Shirts / <span>{product.brand} Shirts</span>{" "}
      </div>
      <div className="details">
        <div className="pic">
          <img src={product.detailsimg} alt="img" />
          <img src={product.detailsimg} alt="img" />
          <img src={product.detailsimg} alt="img" />
          <img src={product.detailsimg} alt="img" />
        </div>
        <div className="infop">
          <div className="tea">
            <div className="d-brand">{product.brand}</div>
            <div className="d-name">{product.name}</div>
            <div className="d-price">
              <div className="price">Rs.{product.price}</div>
              <div className="ogprice">Rs.{product.originalPrice}</div>
              <div className="disc ">({product.discount}OFF)</div>
            </div>
            <span>inclusive of all tasks</span>
            <div className="size">
              <span>SELECT SIZE</span>
              {err ? <div>select sixe</div> : <div></div>}
              <button value="38" onClick={clickHandler}>
                38
              </button>
              <button value="40" onClick={clickHandler}>
                40
              </button>
              <button value="42" onClick={clickHandler}>
                42
              </button>
            </div>
          </div>
          <div className="detailspt2">
            <button className="bag-btn" onClick={bagHandler}>
              <BsFillHandbagFill />
              <span>ADD TO BAG</span>
            </button>
            <button className="wishlist-btn">
              <BsHeart />
              <span>WISHLIST</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
