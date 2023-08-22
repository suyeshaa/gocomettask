import React from "react";
import { useParams } from "react-router";
import { productData } from "../data";

const SearchedProd = () => {
  const { searched } = useParams();
  console.log(searched);
  return (
    <div>
      {productData
        .filter((el) => {
          return searched.toLowerCase() === ""
            ? el
            : el.name.toLowerCase().includes(searched);
        })
        .map((el) => {
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

export default SearchedProd;
