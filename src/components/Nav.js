import React, { useState } from "react";
import { useNavigate } from "react-router";
import mlogo from "../assets/mlogo.png";
import { BiSearch } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { BsHeart } from "react-icons/bs";
import { BsHandbag } from "react-icons/bs";
import "./Nav.css";
import CartModal from "./CartModal";
import { productData } from "../data";

const Nav = ({ wishlistArr, chooseCurrData }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // search
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(search);
    // navigate(`/search/${search}`);
    let searchedProduct = productData.filter((item) => {
      return search.toLowerCase() === ""
        ? item
        : item.name.toLowerCase().includes(search);
    });

    console.log(searchedProduct);
    chooseCurrData(searchedProduct);
  };

  // wishlist
  const showWishlist = () => {
    navigate("/wishlist", { state: wishlistArr });
    // chooseCurrArr(wishlistArr);
  };

  // bag
  // const handleBagModal = () => {
  //   setOpen(true);
  // };

  return (
    <div className="navdiv">
      <div className="navpt1">
        <img src={mlogo} alt="logo" className="logo" />
        <div className="navcateglist">
          <span className="navcateg">MEN</span>
          <span className="navcateg">WOMEN</span>
          <span className="navcateg">KIDS</span>
          <span className="navcateg">HOME & LIVING</span>
          <span className="navcateg">BEAUTY</span>
          <span className="navcateg">STUDIO</span>
        </div>
      </div>
      {/* search */}
      <div className="navpt2">
        <div>
          <form onSubmit={submitHandler} className="searchform">
            <button type="submit" className="searchbtn">
              <BiSearch className="searchlogo" />
            </button>
            <input
              type="text"
              className="searchbox"
              placeholder="Search for products, brands and more"
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
        <div className="navpt3">
          {/* profile */}
          <div className="sub">
            <div className="logo">
              <FiUser />
            </div>
            Profile
          </div>
          {/* wishlist */}

          <div onClick={showWishlist} className="sub">
            <div className="logo">
              <BsHeart />
            </div>
            Wishlist
          </div>

          {/* cart */}
          <div className="sub">
            <button className="sub" onClick={() => setIsOpen(true)}>
              <div className="logo">
                <BsHandbag />
              </div>
              Bag
            </button>
            {isOpen && <CartModal setIsOpen={setIsOpen} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
