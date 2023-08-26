import React from "react";
import { productData } from "../data";

const Sort = ({ chooseCurrData }) => {
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
    chooseCurrData(sortedProducts);
    console.log(sortedProducts);
  };

  return (
    <div className="mainpt3">
      <div className="filter">FILTERS</div>
      <div className="sort select ">
        <span>Sort by :</span>
        <select onChange={sortHandler} className="sort-box" id="format">
          {/* <div className="optn-list"> */}
          <option className="optn" value="Recommended ">
            Recommended
          </option>
          <option className="optn" value="high">
            Price: High To Low
          </option>
          <option className="optn" value="low">
            Price: Low To High
          </option>
          {/* </div> */}
        </select>
      </div>
    </div>
  );
};

export default Sort;
