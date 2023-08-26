import React, { useState } from "react";
import { useParams } from "react-router";
import { productData } from "../data";
import { BsFillHandbagFill } from "react-icons/bs";

import Nav from "./Nav";
import "./Details.css";

const Details = () => {
  const { id } = useParams();
  let product = productData.filter((item) => item.key == id);
  product = product[0];
  console.log(product);
  // product.addedToCard = false;

  const [size, setSize] = useState("");
  const [err, setErr] = useState(false);
  const [added, setAdded] = useState(false);

  const sizes = [38, 40, 42];
  const [selectedSizeIndex, setSelectedIndex] = useState(null);

  let cartItems = [];

  const clickHandler = (e, index) => {
    setSelectedIndex(index);
    console.log("clicked", e.target.value);
    setSize(e.target.value);
    product.size = size;
    setErr(false);
  };

  const bagHandler = () => {
    setAdded(true);
    if (!size) {
      setErr(true);
    } else {
      product.addedToCard = true;
      console.log(product);

      cartItems = [...cartItems, product];

      let it = JSON.parse(sessionStorage.getItem("bagItems"));
      if (product) {
        console.log(product);
        if (it != null) {
          let items = [...it, { ...product, size: { size } }];
          sessionStorage.setItem("bagItems", JSON.stringify(items));
        } else {
          sessionStorage.setItem(
            "bagItems",
            JSON.stringify([{ ...product, size: { size } }])
          );
        }
      }
    }
  };

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

              {sizes.map((size, index) => {
                return (
                  <button
                    key={size}
                    className={
                      index === selectedSizeIndex ||
                      (product.addedToCard && product.size === size)
                        ? "clicked"
                        : ""
                    }
                    value={size}
                    onClick={(e) => clickHandler(e, index)}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="detailspt2">
            <button className="bag-btn" onClick={bagHandler}>
              <BsFillHandbagFill />
              {added ? <span>ADDED TO BAG</span> : <span>ADD TO BAG</span>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
