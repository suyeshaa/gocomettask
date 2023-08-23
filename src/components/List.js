import React, { useState } from "react";
import { productData } from "../data";
import { Link, useNavigate } from "react-router-dom";

const List = () => {
  const [search, setSearch] = useState("");
  const [something, setsomething] = useState(productData);
  const [discount, setDiscount] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  let wishlistArr = [];

  const handleCardClick = (el) => {
    console.log(el);
    navigate(`/details/${el.key}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(search);
    navigate(`/search/${search}`);
  };

  function filterProd(productData, discount, brandTags, colorTags) {
    console.log("tags", brandTags, colorTags);
    return productData.filter(
      (item) => {
        console.log(item.color, item.brand, brandTags, colorTags);
        if (brandTags.length == 0) {
          return colorTags.includes(item.color);
        } else if (colorTags.length == 0) {
          return brandTags.includes(item.brand);
        } else {
          return (
            colorTags.includes(item.color) && brandTags.includes(item.brand)
          );
        }
        // return filterTag.includes(item.color) && filterTag.includes(item.brand);
      }
      // discount <= item.discount
    );
  }

  const discountHandler = (e) => {
    if (e.target.checked) {
      setDiscount(e.target.value);
    }
  };

  let brandTags = [];
  let colorTags = [];
  var newData = productData;

  const filterHandler = (e, type) => {
    if (e.target.checked) {
      if (type === "brand") {
        brandTags = [...brandTags, e.target.value];
      } else {
        colorTags = [...colorTags, e.target.value];
      }
    } else {
      if (type === "brand") {
        brandTags = brandTags.filter((item) => item !== e.target.value);
      } else {
        colorTags = colorTags.filter((item) => item !== e.target.value);
      }
    }

    newData = filterProd(productData, discount, brandTags, colorTags);

    console.log("filtereddata", newData);
    setsomething(newData);
  };

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
    console.log(sortedProducts);
  };

  const wishlistHandler = (el) => {
    // el.wishlist = !el.wishlist;
    // console.log("first");
    // console.log(el);
    // if (el.wishlist === true) {
    //   wishlistArr = [...wishlistArr, el];
    // } else {
    //   wishlistArr = wishlistArr.filter((it) => it.key !== el.key);
    // }
    // console.log("wishlistarr", wishlistArr);

    if (wishlist.includes(el)) {
      wishlistArr = wishlist.filter((item) => item.key !== el.key);
    } else {
      wishlistArr = [...wishlist, el];
    }

    console.log("wishlist", wishlistArr);
    setWishlist(wishlistArr);
  };

  const showWishlist = () => {
    navigate("/wishlist", { state: wishlist });
  };

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

      <div>
        Sort
        <select onChange={sortHandler}>
          <option value="Recommended ">Recommended</option>
          <option value="high">price: high to low</option>
          <option value="low">price: low to high</option>
        </select>
      </div>

      {productData.map((el) => {
        return (
          <div className="box" onClick={() => handleCardClick(el)}>
            <div>{el.brand}</div>
            <div>{el.name}</div>
            <div>{el.price}</div>
            <div>{el.originalPrice}</div>
            <div>{el.discount}</div>
            <button onClick={() => wishlistHandler(el)}>Wishlist</button>
          </div>
        );
      })}

      <div onClick={showWishlist}>show wishlist prod</div>
    </div>
  );
};

export default List;
