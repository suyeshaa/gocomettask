import React, { useEffect, useState } from "react";
import "./CartModal.css";
import { RiCloseLine } from "react-icons/ri";
import { productData } from "../data";

const CartModal = ({ setIsOpen }) => {
  let bagItems = JSON.parse(sessionStorage.getItem("bagItems"));
  const [itm, setItm] = useState(bagItems);
  // getitems from localstorage
  console.log(bagItems);
  let totalPrice;
  let actPrice;

  if (itm !== null && itm.length) {
    let ogPriceArr = itm.map((it) => it.originalPrice);
    let actPriceArr = itm.map((it) => it.price);
    totalPrice = ogPriceArr.reduce(
      (prevValue, currValue) => prevValue + currValue
    );
    actPrice = actPriceArr.reduce(
      (prevValue, currValue) => prevValue + currValue
    );
  }

  let discount = totalPrice - actPrice;
  let lastPrice = actPrice + 15;

  const delProductHandler = (it) => {
    it.addedToCard = false;
    // let items = JSON.parse(localStorage.getItem("bagItems"));
    bagItems = bagItems.filter((item) => item.key !== it.key);
    if (bagItems.length === 0) {
      sessionStorage.removeItem("item");
    }
    sessionStorage.setItem("bagItems", JSON.stringify(bagItems));
    setItm(bagItems);
    console.log("del", bagItems, it);
  };

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
              {itm ? (
                itm.map((item) => {
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
                        <div className="modalpt">
                          <div className="prod-size">
                            Size:<span>{item.size.size}</span>
                          </div>
                        </div>
                        <div className="card-price">
                          <div className="m-price">Rs.{item.price}</div>
                          <div className="m-ogprice">
                            Rs.{item.originalPrice}
                          </div>
                          <div className="m-disc ">({item.discount}OFF)</div>
                        </div>
                        <div className="m-return">
                          <span>14 days</span> return available
                        </div>
                      </div>
                      <button
                        className="close-prod"
                        onClick={() => delProductHandler(item)}
                      >
                        <RiCloseLine />
                      </button>
                    </div>
                  );
                })
              ) : (
                <div>No Items </div>
              )}
            </div>
            <div className="summary heading">
              Summary
              {itm.length ? (
                <div className="cart-info">
                  <div className="checkout-info price-heading">
                    PRICE DETAILS ({bagItems.length} items)
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
                    <div>Rs.{lastPrice}</div>
                  </div>
                  <div>
                    <button className="order-btn">PLACE ORDER</button>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
