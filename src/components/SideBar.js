import React, { useState } from "react";
import { productData } from "../data";

import "./Sidebar.css";

const SideBar = ({ chooseCurrData, dt }) => {
  const [discount, setDiscount] = useState("");
  const [data, setData] = useState(productData);
  const [brand, setBrand] = useState([]);
  const [color, setColor] = useState([]);

  let brandTags = [];
  let colorTags = [];
  var newData = productData;

  function filterProd(productData, discount, brandTags, colorTags) {
    console.log("tags", brandTags, colorTags);
    return productData.filter((item) => {
      console.log(item.color, item.brand, brandTags, colorTags);
      if (brandTags.length == 0) {
        return colorTags.includes(item.color);
      } else if (colorTags.length == 0) {
        return brandTags.includes(item.brand);
      } else {
        return colorTags.includes(item.color) && brandTags.includes(item.brand);
      }
    });
  }

  const filterHandler = (e, type) => {
    if (e.target.checked) {
      if (type === "brand") {
        brandTags = [...brand, e.target.value];
        colorTags = [...color];
      } else {
        colorTags = [...color, e.target.value];
        brandTags = [...brand];
      }
    } else {
      if (type === "brand") {
        colorTags = [...color];
        brandTags = brand.filter((item) => item !== e.target.value);
      } else {
        brandTags = [...brand];
        colorTags = color.filter((item) => item !== e.target.value);
      }
    }
    newData = filterProd(productData, discount, brandTags, colorTags);

    console.log("filtereddata", newData);
    setBrand(brandTags);
    setColor(colorTags);
    newData ? chooseCurrData(newData) : chooseCurrData(productData);
    // setData(newData);
  };

  const discountHandler = (e) => {
    if (e.target.checked) {
      setDiscount(e.target.value);
    }
  };

  return (
    <div>
      <div>
        <div className="brand-optn">
          <span>BRAND</span>
          <label>
            <input
              type="checkbox"
              onChange={(e) => filterHandler(e, "brand")}
              value="Roadster"
            />
            <span>Roadster</span>
          </label>
          <label>
            <input
              type="checkbox"
              onChange={(e) => filterHandler(e, "brand")}
              value="Allen Solly"
            />
            <span>Allen Solly</span>
          </label>
          <label>
            <input
              type="checkbox"
              onChange={(e) => filterHandler(e, "brand")}
              value="Levis"
            />
            <span>Levis</span>
          </label>
          <label>
            <input
              type="checkbox"
              onChange={(e) => filterHandler(e, "brand")}
              value="Van Huesen"
            />
            <span>Van Huesen</span>
          </label>
        </div>
        <div className="color-optn">
          <span>COLOUR</span>
          <label>
            <input
              type="checkbox"
              onChange={(e) => filterHandler(e, "color")}
              value="Blue"
            />
            <span>Blue</span>
          </label>
          <label>
            <input
              type="checkbox"
              onChange={(e) => filterHandler(e, "color")}
              value="Black"
            />
            <span>Black</span>
          </label>
          <label>
            <input
              type="checkbox"
              onChange={(e) => filterHandler(e, "color")}
              value="Red"
            />
            <span>Red</span>
          </label>
          <label>
            <input
              type="checkbox"
              onChange={(e) => filterHandler(e, "color")}
              value="Grey"
            />
            <span>Grey</span>
          </label>
        </div>
        <div className="disc-optn">
          <span>DISCOUNT</span>
          <label>
            <input
              type="radio"
              name="discount"
              onChange={discountHandler}
              value="10"
            />
            <span>10% and above</span>
          </label>
          <label>
            <input
              type="radio"
              name="discount"
              onChange={discountHandler}
              value="30"
            />
            <span>30% and above</span>
          </label>
          <label>
            <input
              type="radio"
              name="discount"
              onChange={discountHandler}
              value="50"
            />
            <span>50% and above</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
