import React, { useState } from "react";
import { productData } from "../data";
import { Link, useNavigate } from "react-router-dom";

const List = () => {
  const [data, setData] = useState(productData);
  const [search, setSearch] = useState("");

  const [filterTags, setFilterTags] = useState([]);
  const [discount, setDiscount] = useState("");

  const navigate = useNavigate();

  // console.log(search);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(search);
    navigate(`/search/${search}`);
  };

  function filterProd(productData, discount, filterTag) {
    console.log("tags", filterTags);
    return productData.filter(
      (item) => {
        console.log(item.color, item.brand, filterTag);
        return filterTag.includes(item.color) && filterTag.includes(item.brand);
      }
      // discount <= item.discount
    );
  }

  const discountHandler = (e) => {
    if (e.target.checked) {
      setDiscount(e.target.value);
    }
    // console.log(discount);
  };

  let filterTag = [];

  const filterHandler = (e, type) => {
    if (e.target.checked) {
      // setFilterTags([...filterTags, e.target.value]);
      filterTag = [...filterTag, e.target.value];
    } else {
      // setFilterTags(
      //   filterTags.filter((filterTag) => filterTag !== e.target.value)
      // );
      filterTag = filterTag.filter((filterTag) => filterTag !== e.target.value);
      // console.log(filterTags);
    }
    const sdata = filterProd(productData, discount, filterTag);
    console.log("filtereddata", sdata);
  };

  // console.log("filtered data", filteredData);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
      <div>
        Filters
        <div>
          Brand
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
              value="allen solly"
            />
            <span>allen solly</span>
          </label>
          <label>
            <input
              type="checkbox"
              onChange={(e) => filterHandler(e, "brand")}
              value="levis"
            />
            <span>levis</span>
          </label>
        </div>
        <div>
          Colour
          <label>
            <input
              type="checkbox"
              onChange={(e) => filterHandler(e, "color")}
              value="blue"
            />
            <span>Blue</span>
          </label>
          <label>
            <input
              type="checkbox"
              onChange={(e) => filterHandler(e, "color")}
              value="black"
            />
            <span>Black</span>
          </label>
          <label>
            <input
              type="checkbox"
              onChange={(e) => filterHandler(e, "color")}
              value="red"
            />
            <span>Red</span>
          </label>
        </div>
        <div>
          Discount
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

      {productData.map((el) => {
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

export default List;
