import React from "react";
import "./CartModal.css";
import { RiCloseLine } from "react-icons/ri";
import { productData } from "../data";

const CartModal = ({ setIsOpen }) => {
  return (
    <div>
      <div className="bg" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modalContent">
            <div className="heading">
              Cart
              {productData.map((item) => {
                return (
                  <div className="modal-info">
                    <div className="modal-img">
                      <img src={item.img} alt="img" />
                    </div>
                    <div className="info">
                      <div>
                        <div className="m-brand">{item.brand}</div>
                        <div className="name m-name">{item.name}</div>
                      </div>

                      <div className="card-price">
                        <div className="m-price">Rs.{item.price}</div>
                        <div className="m-ogprice">Rs.{item.originalPrice}</div>
                        <div className="m-disc ">({item.discount}OFF)</div>
                      </div>
                      <div className="m-return">
                        <span>14 days</span> return available
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="summary heading">Summary</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
