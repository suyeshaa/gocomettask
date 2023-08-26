import { Route, Routes } from "react-router";
import "./App.css";
import List from "./components/List";
import Wishlist from "./components/Wishlist";
import SearchedProd from "./components/SearchedProd";
import Details from "./components/Details";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [actData, setActData] = useState([]);
  const chooseActData = (sdata) => {
    setActData(sdata);
  };
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route exact path="/search/:searched" element={<SearchedProd />} />
      <Route exact path="/wishlist" element={<Wishlist />} />
      <Route exact path="/details/:id" element={<Details />} />
    </Routes>
  );
}

export default App;
