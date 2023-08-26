import React from "react";
import "./CartModal.css";
import { RiCloseLine } from "react-icons/ri";
import { productData } from "../data";

const CartModal = ({ setIsOpen }) => {
  let totalPrice;
  let actPrice;
  let ogPriceArr = productData.map((it) => it.originalPrice);
  let actPriceArr = productData.map((it) => it.price);

  totalPrice = ogPriceArr.reduce(
    (prevValue, currValue) => prevValue + currValue
  );
  actPrice = actPriceArr.reduce(
    (prevValue, currValue) => prevValue + currValue
  );

  let discount = totalPrice - actPrice;

  // getitems from localstorage
  const bagItems = JSON.parse(sessionStorage.getItem("bagItems"));
  console.log(bagItems);

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
            <div className="summary heading">
              Summary
              <div className="cart-info">
                <div className="checkout-info price-heading">
                  PRICE DETAILS ({productData.length} items)
                </div>
                <div className="checkout-info">
                  <div>Total MRP</div>
                  <div className="totPrice">Rs.{totalPrice}</div>
                </div>
                <div className="checkout-info">
                  <div>Discount on MRP</div>
                  <div className="totDisc">-Rs.{discount}</div>
                </div>
                <div className="checkout-info">
                  <div>Convenience Fee</div>
                  <div className="conven">
                    <span>Rs.99</span> Rs.15
                  </div>
                </div>
                <div className="price-info checkout-info">
                  <div>Total Amount</div>
                  <div>Rs.{actPrice}</div>
                </div>
                <div>
                  <button className="order-btn">PLACE ORDER</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
