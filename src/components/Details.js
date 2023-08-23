import React, { useState } from "react";
import { useParams } from "react-router";
import { productData } from "../data";

const Details = () => {
  const { id } = useParams();
  let product = productData.filter((item) => item.key == id);
  product = product[0];

  const [size, setSize] = useState("");
  const [err, setErr] = useState(false);

  const clickHandler = (e) => {
    setSize(e.target.value);
  };

  const bagHandler = () => {};

  return (
    <div>
      <div>{product.brand}</div>
      <div>{product.name}</div>
      <div>{product.price}</div>
      <div>{product.originalPrice}</div>
      <div>{product.discount}</div>
      <div>
        Size
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
      <button onClick={bagHandler}>Add to Bag</button>
    </div>
  );
};

export default Details;
